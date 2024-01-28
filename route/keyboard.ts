import { Router } from 'express';
import * as keyboardController from '../controller/keyboard';

const router = Router();

router.get('/getAllKeyboards', keyboardController.getAllKeyboards);
router.post('/createKeyboard', keyboardController.createKeyboard);
router.delete('/deleteKeyboard', keyboardController.deleteKeyboard);

export default router;
