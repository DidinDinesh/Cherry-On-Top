
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

export { addFlower, listFlower, removeFlower }
