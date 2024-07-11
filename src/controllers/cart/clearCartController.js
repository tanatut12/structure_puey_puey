import NotFoundError from '../../error/NotFoundError.js';
import Cart from '../../models/cartModel.js';

const clearCart = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cart) {
      throw new NotFoundError(`Cart can't update`);
    }
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export default clearCart;
