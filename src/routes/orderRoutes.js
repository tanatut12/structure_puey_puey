import express from 'express';
import createOrder from '../controllers/orders/createOrderController.js';
import getOrder from '../controllers/orders/getOrderController.js';
import getOrders from '../controllers/orders/getOrdersController.js';



const router = express.Router();

// create order post  createOrderController
router.post('/create-order', createOrder);

// get orders get OrdersController 
router.get('/orders', getOrder);

// get order by id getOrderController
router.get('/orders/:orderId', getOrders);

export default router;