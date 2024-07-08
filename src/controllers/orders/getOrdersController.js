// api 31
import Order from "../../models/orderModel.js";


const getOrders = async (req,res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        console.log('fetch one');

        if (!order) {
            return res.status(404).send('Order not found');
    }
        res.send(order);
    } catch (error)  {
        res.status(500).send(error.message);
    }
};

export default getOrders;