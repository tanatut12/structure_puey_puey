import Cart from '../../models/cartModel.js';

const addToCart = async (req, res, next) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    next(error);
  }
};

export default addToCart;
