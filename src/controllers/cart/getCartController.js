import Cart from '../../models/cartModel.js';

const getCartByIdUser = async (req, res) => {
  try {
    const carts = await Cart.find()
      .populate('user')
      .populate('products.productId');
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getCartByIdUser;
