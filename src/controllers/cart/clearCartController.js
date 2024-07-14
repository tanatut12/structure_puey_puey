import NotFoundError from '../../error/NotFoundError.js';
import Cart from '../../models/cartModel.js';

const clearCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOneAndUpdate({ user: userId }, { products: [] }, {
      new: true,
      runValidators: true
    });
    if (!cart) {
      throw new NotFoundError(`Cart not found`);
    }
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export default clearCart;
