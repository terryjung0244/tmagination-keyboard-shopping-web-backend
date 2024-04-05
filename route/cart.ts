import { Router } from 'express';
import * as cartController from '../controller/cart';

const router = Router();

router.put('/updateCart', cartController.updateCart);

export default router;
