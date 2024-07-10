import Product from '../../models/productModel.js';
import NotFoundError from '../../error/NotFoundError.js';

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params._id);
    console.log('fetch one');
    if (!product) {
      throw new NotFoundError('Item not found');
    }
    res.send(product);
  } catch (error) {
    next(error);
  }
};
export default getProductById;
