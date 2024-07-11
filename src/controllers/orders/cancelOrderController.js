import Order from '../../models/orderModel.js';

const deleteOrder = async (req, res) => {
  await Order.findOneAndDelete({ id: req.params.id });
  console.log('Order deleted successfully');
  res.json({
    success: true,
    name: req.body.name,
  });
};

export default deleteOrder;
