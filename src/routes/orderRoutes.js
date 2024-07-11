import express from 'express';
import createOrder from '../controllers/orders/createOrderController.js';
import getOrder from '../controllers/orders/getOrderController.js';
import getOrders from '../controllers/orders/getOrdersController.js';
import updateOrder from '../controllers/orders/updateOrderController.js';
import deleteOrder from '../controllers/orders/cancelOrderController.js';

const router = express.Router();

// create order post  createOrderController
router.post('/create-order', createOrder);

// get orders get OrdersController
router.get('/', getOrders);

// get order by id getOrderController
router.get('/:orderId', getOrder);

// update order > patch updateOrderController
router.patch('/:orderId', updateOrder);
// cancel order > delete cancelOrderController
router.post('/:orderId', deleteOrder);
export default router;
