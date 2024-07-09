import Cart from '../../models/cartModel.js';

const removeFromCart = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).send();
    }
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export default removeFromCart;
