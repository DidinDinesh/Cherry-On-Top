import mongoose from "mongoose"

const flowerSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description : {type:String, required:true},
    price : {type:Number, required:true},
    image : {type:String, required:true},
    category : {type:String, required:true},
    type : {type:String, required:true},
    color : {type:String, required:true},
    occasion : {type:Array, required:true}
})

const flowerModel = mongoose.models.flower || mongoose.model("flower", flowerSchema)

export default flowerModel;