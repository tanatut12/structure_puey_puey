import Cart from '../../models/cartModel.js';

const addToCart = async (req, res, next) => {
  try {
    const { userId, products } = req.body;
    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      products.forEach(
        ({ productId, name, new_price, image, description, quantity }) => {
          const existingProduct = cart.products.find(
            (p) => p.productId.toString() === productId,
          );
          if (existingProduct) {
            existingProduct.quantity += quantity;
          } else {
            cart.products.push({
              productId,
              name,
              new_price,
              image,
              description,
              quantity,
            });
          }
        },
      );
      cart = await cart.save();
    } else {
      cart = new Cart({ user: userId, products });
      await cart.save();
    }

    res.status(201).send(cart);
  } catch (error) {
    next(error);
  }
};

export default addToCart;
