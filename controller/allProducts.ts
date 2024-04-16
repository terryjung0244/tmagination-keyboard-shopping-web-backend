import { Request, Response } from 'express';
import keyboardSchema from '../schema/keyboard';
import switchSchema from '../schema/switch';
import keycapSchema from '../schema/keycap';
import { IKeyboard } from 'model/keyboard';
import { ISwitch } from 'model/switch';
import { IKeycap } from 'model/keycap';

// GET ALL
export const getAllProducts = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result1: IKeyboard[] = await keyboardSchema.find();

    const result2: ISwitch[] = await switchSchema.find();

    const result3: IKeycap[] = await keycapSchema.find();

    res.json({
      message: 'Succesfully get all products',
      result: [...result1, ...result2, ...result3],
    });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
