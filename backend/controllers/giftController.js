
import giftModel from "../models/giftModel.js";
import fs from 'fs';

// add gift item

const addGift = async (req, res) => {

    try {
        if (!req.file) {
            return res.json({ success: false, message: "Image is required" });
        }
    
        let image_filename = `${req.file.filename}`
    
        const gift = new giftModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            type: req.body.type,
            towho: req.body.towho,
            occasion : req.body.occasion,
            image: image_filename
        })
        await gift.save()
        res.json({success:true, message:"Gift Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// all gift list

const listGift = async (req, res) => {

    try {
        const gifts = await giftModel.find({});
        res.json({success:true, data:gifts})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

// remove gift item

const removeGift = async (req, res) => {
    
    try {
        const gift = await giftModel.findById(req.body.id);
        fs.unlink(`uploads/${gift.image}`, () => {})
        await giftModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Gift Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

//api for updating gift price

const updateGift = async (req, res) => {
    try {
        if (req.body.price <= 0) {
            return res.status(400).json({ success: false, message: "Price must be greater than zero" });
        }

        // Update the gift
        
        await giftModel.findByIdAndUpdate(req.body.itemId, {price: req.body.price});
        res.json({ success: true, message: "Item updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addGift, listGift, removeGift, updateGift }
