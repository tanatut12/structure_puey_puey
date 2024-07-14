import Cart from '../../models/cartModel.js';

const getCartByIdUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId })
      .populate('user')
      .populate('products.productId');
    if (!cart) {
      return res.status(404).send({ error: "Cart not found" });
    }
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export default getCartByIdUser;
