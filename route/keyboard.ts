import { Router } from 'express';
import * as keyboardController from '../controller/keyboard';

const router = Router();

router.get('/getAllKeyboards', keyboardController.getAllKeyboards);
router.post('/createKeyboard', keyboardController.createKeyboard);
router.delete('/deleteKeyboard', keyboardController.deleteKeyboard);
router.put('/updateKeyboard', keyboardController.updateKeyboard);
router.get('/searchKeyboards', keyboardController.searchKeyboard);
router.get('/getKeyboardById', keyboardController.getKeyboardById);

export default router;
