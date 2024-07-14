import NotFoundError from '../../error/NotFoundError.js';
import Cart from '../../models/cartModel.js';

const removeFromCart = async (req, res, next) => {
  try {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      throw new NotFoundError(`Cart not found`);
    }
    cart.products = cart.products.filter(product => product.productId.toString() !== productId);
    await cart.save();
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export default removeFromCart;
