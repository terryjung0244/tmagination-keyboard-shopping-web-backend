import { Request, Response } from 'express';
import { IKeyboard } from '../model/keyboard';
import keyboardSchema from '../schema/keyboard';
import { getUuid } from '../util/uuid';

// GET ALL
export const getAllKeyboards = async (req: Request, res: Response) => {
  console.log(req.query);
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

export const searchKeyboard = async (req: Request, res: Response) => {
  // try {
  //   const result: IKeyboard[] = await keyboardSchema.find();
  //   res.json({ message: 'Succesfully get all keyboards', result });
  // } catch (err) {
  //   res.json({ message: JSON.stringify(err) });
  // }

  console.log(req.query, '아아아아아아아아앙');
  const { searchKeyboardInfo } = req.query;

  try {
    // any[] 타입 모라고 해야하는지 모르겠음
    const result: any[] = await keyboardSchema.find();
    console.log(result);
    const searchKeyboard = result.filter((keyboard) => {
      if (
        keyboard.keyboardName.includes(searchKeyboardInfo) ||
        keyboard.keyboardDesc.includes(searchKeyboardInfo)
      ) {
        return keyboard;
      }
    });
    console.log(searchKeyboard); //안들어감
    res.json({
      message: `Succesfully SearchInfo ${searchKeyboardInfo}`,
      searchKeyboard,
    });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
