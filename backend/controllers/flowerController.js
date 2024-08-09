
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
        if (req.body.price <= 0) {
            return res.status(400).json({ success: false, message: "Price must be greater than zero" });
        }

        // Update the flower
        
        await flowerModel.findByIdAndUpdate(req.body.itemId, {price: req.body.price});
        res.json({ success: true, message: "Item updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addFlower, listFlower, removeFlower, updateFlower }
