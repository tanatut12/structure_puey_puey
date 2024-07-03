import Cart from '../../models/cartModel.js';

const addToCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default addToCart;
