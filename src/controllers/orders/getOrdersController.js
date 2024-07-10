// api 31
import Order from '../../models/orderModel.js';
import NotFoundError from '../../error/NotFoundError.js';

const getOrders = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId);
    console.log('fetch one');

    if (!order) {
      throw new NotFoundError('Order not found');
    }
    res.send(order);
  } catch (error) {
    next(error);
  }
};

export default getOrders;
