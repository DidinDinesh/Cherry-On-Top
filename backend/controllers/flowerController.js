
import flowerModel from "../models/flowerModel.js";
import fs from 'fs';

// add flower item

const addFlower = async (req, res) => {

    try {

        if (!req.file) {
            return res.json({ success: false, message: "Image is required" });
        }

        let image_filename = `${req.file.filename}`

        const flower = new flowerModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            type: req.body.type,
            color: req.body.color,
            occasion : req.body.occasion,
            image: image_filename
        })
        await flower.save()
        res.json({success:true, message:"Flower Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// all flower list

const listFlower = async (req, res) => {

    try {
        const flowers = await flowerModel.find({});
        res.json({success:true, data:flowers})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

// remove flower item

const removeFlower = async (req, res) => {
    
    try {
        const flower = await flowerModel.findById(req.body.id);
        fs.unlink(`uploads/${flower.image}`, () => {})
        await flowerModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Flower Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

//api for updating flower price

const updateFlower = async (req, res) => {
    try {

        const { price, itemId} = req.body;

        let updateData = {};
        
        const flower = await flowerModel.findById(itemId);
        
        if (!flower) {
            return res.status(404).json({ success: false, message: "flower not found" });
        }

        if (req.file) {
    
            const image_filename = `${req.file.filename}`;

            fs.unlink(`uploads/${flower.image}`, (err) => {
                if (err) {
                    console.error("Failed to delete old image", err);
                }
            });

            updateData.image = image_filename;
        }

        if (price && Number(price) > 0) {
            updateData.price = Number(price);
        }

        // Update the flower
        
        await flowerModel.findByIdAndUpdate(itemId, updateData);
        res.json({ success: true, message: "Item updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addFlower, listFlower, removeFlower, updateFlower }
