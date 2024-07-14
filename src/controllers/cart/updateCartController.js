import Cart from '../../models/cartModel.js';

export const updateCartQuantity = async (req, res, next) => {
  try {
    const { userId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const product = cart.products.find(
      (p) => p.productId.toString() === productId,
    );

    if (product) {
      product.quantity = quantity;
      cart = await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Product not found in cart' });
    }
  } catch (error) {
    next(error);
  }
};
