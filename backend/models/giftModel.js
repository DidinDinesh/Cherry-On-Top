import mongoose from "mongoose"

const giftSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description : {type:String, required:true},
    price : {type:Number, required:true},
    image : {type:String, required:true},
    category : {type:String, required:true},
    type : {type:String, required:true},
    towho : {type:Array, required:true}
})

const giftModel = mongoose.models.gift || mongoose.model("gift", giftSchema)

export default giftModel;