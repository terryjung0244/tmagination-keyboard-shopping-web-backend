import { Router } from 'express';
import * as keyboardController from '../controller/keyboard';

const router = Router();

router.get('/getAllKeyboards', keyboardController.getAllKeyboards);
router.post('/createKeyboard', keyboardController.createKeyboard);

export default router;
