import userModel from '../models/userModel.js'

// add item to user cart

const addToCart = async (req,res) => {

    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData || {};
    
        if (!cartData[req.body.itemId]) 
        {
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Item Added to cart"})
        
    } catch (error) {
        console.log(error);
    
        res.json({success:false, message:"Error"});
    }
}

// update item quantity at user cart

const updateCartItem = async (req, res) => {

    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData || {};

        if (req.body.value > 0) {
            cartData[req.body.itemId] = req.body.value;
        } else {
            delete cartData[req.body.itemId];
        }

        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Cart item updated"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error updating cart item"});
    }
}

//remove item from user cart

const removeFromCart = async (req, res) => {

    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData || {};

        delete cartData[req.body.itemId];

        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Item removed from cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error removing item from cart"});
    }
}

//fetch user cart data

const getCart = async (req,res) => {
    
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData || {};
        res.json({success:true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export { addToCart,updateCartItem, removeFromCart, getCart }