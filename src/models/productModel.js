import mongoose from "mongoose";

const Product = mongoose.model("Product",{
    id: {
        type: Number,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price: {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    old_price: {
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})

export default Product