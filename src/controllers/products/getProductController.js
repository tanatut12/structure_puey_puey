import Product from "../../models/productModel.js"

const getProductById = async (req,res) =>{
    try {
        const product = await Product.findById(req.params._id)
        console.log('fetch one')
        if(!product){
            return res.status(404).send('item not found')
        }
        res.send(product)
    } catch (error) {
        res.status(500).send(err.message)
    }
}
export default getProductById