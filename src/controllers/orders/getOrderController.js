// api 30

import Order from "../../models/orderModel.js";

    const getOrder = async (req,res) =>{
    try {
        const order = await Order.find();
        res.send(order);

    } catch (error) {
        res.status(500).send("Server Error");
    }
};

export default getOrder;