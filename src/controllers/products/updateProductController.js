import Product from '../../models/productModel.js';
import NotFoundError from '../../error/NotFoundError.js';

const updateProductById = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const updates = req.body;

    // Find the product by id and update it
    const updatedProduct = await Product.findOneAndUpdate({ _id }, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      throw new NotFoundError({ error: 'Product not found' });
    }

    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export default updateProductById;
