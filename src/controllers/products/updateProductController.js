import Product from "../../models/productModel.js";

const updateProductById = async (req, res) => {
    try {
        const { _id } = req.params;
        const updates = req.body;
        
        // Find the product by id and update it
        const updatedProduct = await Product.findOneAndUpdate({ _id }, updates, { new: true, runValidators: true });
        
        if (!updatedProduct) {
            return res.status(404).send({ error: 'Product not found' });
        }

        res.send(updatedProduct);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

export default updateProductById