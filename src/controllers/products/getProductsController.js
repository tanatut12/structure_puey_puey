import Product from '../../models/productModel.js';
import NotFoundError from '../../error/NotFoundError.js';

const getAllProducts = async (req, res) => {
  let products = await Product.find({});
  console.log('All product fetched');
  if (!products){
    throw new NotFoundError('Products not found')
  }
  res.send(products);
};

export default getAllProducts;
