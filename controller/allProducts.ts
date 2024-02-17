import { Request, Response } from 'express';
import keyboardSchema from '../schema/keyboard';
import switchSchema from '../schema/switch';
import { IKeyboard } from 'model/keyboard';
import { ISwitch } from 'model/switch';

// GET ALL
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result1: IKeyboard[] = await keyboardSchema.find();
    console.log(result1);
    const result2: ISwitch[] = await switchSchema.find();
    console.log(result2);

    res.json({
      message: 'Succesfully get all products',
      result: [...result1, ...result2],
    });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
