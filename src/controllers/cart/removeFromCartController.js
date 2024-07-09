import NotFoundError from '../../error/NotFoundError.js';
import Cart from '../../models/cartModel.js';

const removeFromCart = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      throw new NotFoundError(`Cart can't remove`);
    }
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export default removeFromCart;
