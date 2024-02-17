import { Router } from 'express';
import * as switchController from '../controller/switch';

const router = Router();

router.get('/getAllSwitches', switchController.getAllSwitches);
router.post('/createSwitch', switchController.createSwitch);
// router.delete('/deleteSwitch', switchController.deleteSwitch);
router.get('/searchSwitches', switchController.searchSwitches);

export default router;
