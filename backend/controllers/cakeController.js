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
        if ( req.body.type.length === 0) {
            return res.status(400).json({ success: false, message: "Type array cannot be empty" });
        }

        if (req.body.price <= 0) {
            return res.status(400).json({ success: false, message: "Price must be greater than zero" });
        }

        // Update the cake
        
        await cakeModel.findByIdAndUpdate(req.body.itemId, {
            type: req.body.type,
            price: req.body.price
        });

        res.json({ success: true, message: "Item updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addCake, listCake,removeCake,updateCake }