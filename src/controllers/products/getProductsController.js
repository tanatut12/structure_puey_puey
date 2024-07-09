import Product from '../../models/productModel.js';

const getAllProducts = async (req, res) => {
  let products = await Product.find({});
  console.log('All product fetched');
  res.send(products);
};

export default getAllProducts;
