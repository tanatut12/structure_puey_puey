import Cart from '../../models/cartModel.js';

const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cart) {
      return res.status(404).send();
    }
    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default clearCart;
