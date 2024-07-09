// api 30

import Order from '../../models/orderModel.js';

const getOrder = async (req, res, next) => {
  try {
    const order = await Order.find();
    res.send(order);
  } catch (error) {
    next(error);
  }
};

export default getOrder;
