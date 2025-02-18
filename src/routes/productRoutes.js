import express from 'express';
import getAllProducts from "../controllers/products/getProductsController.js"
import postAllProducts from '../controllers/products/addProductController.js';
import getProductById from '../controllers/products/getProductController.js'
import deleteProduct from '../controllers/products/deleteProductController.js';
import updateProductById from '../controllers/products/updateProductController.js';
import upload from '../middlewares/uploadMiddleware/uploadMiddleware.js';
import { uploadImage } from '../controllers/products/uploadPhotoController.js';



const router = express.Router();


// get all product
router.get('/Products', getAllProducts);
// get product by id
router.get('/Products/:_id', getProductById)
// add product api
router.post('/', postAllProducts)
// delete product
router.post('/delete',deleteProduct)
// edit product
router.patch('/Products/:_id',updateProductById)
// upload photo
router.post('/upload', upload.single('product'), uploadImage);


export default router