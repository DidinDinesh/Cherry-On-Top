import cakeModel from "../models/cakeModel.js";
import fs from 'fs';

// add cake item

const addCake = async (req,res) => {

    try {
        if (!req.file) {
            return res.json({ success: false, message: "Image is required" });
        }
      
        let image_filename = `${req.file.filename}`;
      
        const cake = new cakeModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            flavour: req.body.flavour,
            type: req.body.type,
            occasion : req.body.occasion,
            image: image_filename
        });
      
        await cake.save();
        res.json({ success: true, message: "Cake Added" });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// all cake list

const listCake = async (req,res) => {

    try {
        const cakes = await cakeModel.find({});
        res.json({success:true, data:cakes})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

// remove cake item

const removeCake = async (req,res) => {
    
    try {
        const cake = await cakeModel.findById(req.body.id);
        fs.unlink(`uploads/${cake.image}`, () => {})
        await cakeModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Cake Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

//api for updating cake price and types 

const updateCake = async (req, res) => {
    try {
        
        const { type, price, itemId} = req.body;

        let updateData = {};

        const cake = await cakeModel.findById(itemId);
        
        if (!cake) {
            return res.status(404).json({ success: false, message: "Cake not found" });
        }

        if (req.file) {

            const image_filename = `${req.file.filename}`;

            fs.unlink(`uploads/${cake.image}`, (err) => {
                if (err) {
                    console.error("Failed to delete old image", err);
                }
            });

            updateData.image = image_filename;
        }

        if ( type && type.length > 0) {
            updateData.type = type;
        }

        if (price && Number(price) > 0) {
            updateData.price = Number(price);
        }

        // Update the cake
        
        await cakeModel.findByIdAndUpdate(itemId, updateData);

        res.json({ success: true, message: "Item updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addCake, listCake,removeCake,updateCake }