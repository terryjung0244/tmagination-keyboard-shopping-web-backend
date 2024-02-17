import { Router } from 'express';
import * as allProductsController from '../controller/allProducts';

const router = Router();

router.get('/getAllProducts', allProductsController.getAllProducts);

export default router;
