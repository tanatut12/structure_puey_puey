// api 32
import Order from '../../models/orderModel.js';

export const createOrder = async (req, res, next) => {
  const { user, products, totalPrice } = req.body;
  try {
    const newOrder = new Order({
      user,
      products,
      totalPrice,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

export default createOrder;
