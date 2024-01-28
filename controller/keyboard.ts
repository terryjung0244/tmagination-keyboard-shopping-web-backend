import { Request, Response } from 'express';
import { IKeyboard } from '../model/keyboard';
import keyboardSchema from '../schema/keyboard';
import { getUuid } from '../util/uuid';

// GET ALL
export const getAllKeyboards = async (req: Request, res: Response) => {
  try {
    const result: IKeyboard[] = await keyboardSchema.find();
    res.json({ message: 'Succesfully get all keyboards', result });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// CREATE
export const createKeyboard = async (req: Request, res: Response) => {
  const {
    keyboardName,
    keyboardDesc,
    keyboardPrice,
    keyboardDiscountRate,
    keyboardStock,
    keyboardFeatures,
    uploadedImageUrl,
  } = req.body;

  try {
    const keyboardId = getUuid();
    const category = 'KEYBOARD';
    const newKeyboard = new keyboardSchema({
      category,
      keyboardId,
      keyboardName,
      keyboardDesc,
      keyboardPrice,
      keyboardDiscountRate,
      keyboardStock,
      keyboardFeatures: {
        color: keyboardFeatures.color,
        switch: keyboardFeatures.switch,
      },
      keyboardImageUrl: uploadedImageUrl,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    await newKeyboard.save(); // save()는 mongodb에서 제공해주는 method중에 하나.
    res.json({ message: 'successfully added keyboard' });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// DELETE
export const deleteKeyboard = async (req: Request, res: Response) => {
  const { keyboardId } = req.query;

  try {
    await keyboardSchema.findOneAndDelete({ keyboardId });
    res.json({ message: `successfully deleted (keyboardId: ${keyboardId})` });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
