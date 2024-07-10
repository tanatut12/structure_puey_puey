import Cart from '../../models/cartModel.js';

const getCartByIdUser = async (req, res, next) => {
  try {
    const carts = await Cart.find()
      .populate('user')
      .populate('products.productId');
    res.status(200).send(carts);
  } catch (error) {
    next(error);
  }
};

export default getCartByIdUser;
