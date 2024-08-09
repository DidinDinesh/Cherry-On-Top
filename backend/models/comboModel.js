import mongoose from "mongoose"

const comboSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description : {type:String, required:true},
    price : {type:Number, required:true},
    image : {type:String, required:true},
    category : {type:String, required:true},
    type : {type:String, required:true},
    occasion : {type:Array, required:true}
})

const comboModel = mongoose.models.combo || mongoose.model("combo", comboSchema)

export default comboModel;