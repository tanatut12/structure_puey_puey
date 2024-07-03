import Product from "../../models/productModel.js";

const deleteProduct = async (req,res) =>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("removed")
    res.json({
        success:true,
        name:req.body.name
    })
}

export default deleteProduct