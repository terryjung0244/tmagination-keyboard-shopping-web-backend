import { Request, Response } from 'express';
import { IKeyboard } from '../model/keyboard';
import keyboardSchema from '../schema/keyboard';

export const getAllKeyboards = async (req: Request, res: Response) => {
  try {
    const result: IKeyboard[] = await keyboardSchema.find();
    res.json({ message: 'Succesfully get all keyboards', result });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

export const createKeyboard = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.json({ newProduct: 'keyboard' });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
