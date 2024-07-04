// api 33
import Order from '../../models/orderModel.js';

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Find the order by id and update it
    const updatedOrder = await Order.findOneAndUpdate({ id }, updates, {
      new: true,
      runValidators: true,
    });
    if (!updateOrder) {
      return res.status(404).send({ error: 'Order not found' });
    }

    return res.json({
      order: updatedOrder,
      message: 'Order updated successfully',
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export default updateOrder;
