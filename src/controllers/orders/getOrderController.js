// api 30
import Order from '../../models/orderModel.js';

const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId);
    console.log('fetch one');

    if (!order) {
      return res.status(404).send('Order not found');
    }
    res.send(order);
  } catch (error) {
    next(error);
  }
};

export default getOrder;
