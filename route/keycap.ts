import { Router } from 'express';
import * as keycapController from '../controller/keycap';

const router = Router();

router.post('/createKeycap', keycapController.createKeycap);
router.get('/searchKeycaps', keycapController.searchKeycap);
router.get('/getAllKeycaps', keycapController.getAllKeycaps);
router.delete('/deleteKeycap', keycapController.deleteKeycap);
router.put('/updateKeycap', keycapController.updateKeycap);

export default router;
