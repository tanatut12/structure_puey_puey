// api 31
import Order from "../../models/orderModel.js";

const getOrders = async (req, res, next) => {
  try {
    const order = await Order.find();
    res.send(order);
  } catch (error) {
    next(error);
  }
};

export default getOrders;