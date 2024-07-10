// api 33
import Order from '../../models/orderModel.js';
import NotFoundError from '../../error/NotFoundError.js';

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Find the order by id and update it
    const updatedOrder = await Order.findOneAndUpdate({ id }, updates, {
      new: true,
      runValidators: true,
    });
    if (!updateOrder) {
      throw new NotFoundError({ error: 'Order not found' });
    }

    return res.json({
      order: updatedOrder,
      message: 'Order updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default updateOrder;
