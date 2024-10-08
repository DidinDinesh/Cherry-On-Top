
import comboModel from "../models/comboModel.js";
import fs from 'fs';

// add combo item

const addCombo = async (req, res) => {

    try {

        if (!req.file) {
            return res.json({ success: false, message: "Image is required" });
        }

        let image_filename = `${req.file.filename}`

        const combo = new comboModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            type: req.body.type,
            occasion : req.body.occasion,
            image: image_filename
        })

        await combo.save()
        res.json({success:true, message:"Combo Added"})
    }  catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// all combo list

const listCombo = async (req, res) => {

    try {
        const combos = await comboModel.find({});
        res.json({success:true, data:combos})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

// remove combo item

const removeCombo = async (req, res) => {
    
    try {
        const combo = await comboModel.findById(req.body.id);
        fs.unlink(`uploads/${combo.image}`, () => {})
        await comboModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Combo Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

//api for updating combo price

const updateCombo = async (req, res) => {
    try {

        const { price, itemId} = req.body;

        let updateData = {};

        const combo = await comboModel.findById(itemId);
        
        if (!combo) {
            return res.status(404).json({ success: false, message: "combo not found" });
        }

        if (req.file) {

            const image_filename = `${req.file.filename}`;

            fs.unlink(`uploads/${combo.image}`, (err) => {
                if (err) {
                    console.error("Failed to delete old image", err);
                }
            });

            updateData.image = image_filename;
        }

        if (price && Number(price) > 0) {
            updateData.price = Number(price);
        }

        // Update the combo
        
        await comboModel.findByIdAndUpdate(itemId, updateData);
        res.json({ success: true, message: "Item updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addCombo, listCombo, removeCombo, updateCombo }
