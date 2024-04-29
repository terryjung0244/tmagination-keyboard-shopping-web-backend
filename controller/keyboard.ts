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
    uploadedImagePath,
  } = req.body;

  try {
    const keyboardId = getUuid();
    const category = 'KEYBOARD';
    const newKeyboard = new keyboardSchema({
      category,
      id: keyboardId,
      name: keyboardName,
      desc: keyboardDesc,
      price: keyboardPrice,
      discountRate: keyboardDiscountRate,
      stock: keyboardStock,
      features: {
        color: keyboardFeatures.color,
        switch: keyboardFeatures.switch,
      },
      imageUrl: uploadedImageUrl,
      imagePath: uploadedImagePath,
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
    await keyboardSchema.findOneAndDelete({ id: keyboardId });
    res.json({ message: `successfully deleted (keyboardId: ${keyboardId})` });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// UPDATE
export const updateKeyboard = async (req: Request, res: Response) => {
  const {
    keyboardId,
    keyboardName,
    keyboardDesc,
    keyboardPrice,
    keyboardDiscountRate,
    keyboardStock,
    keyboardImageUrl,
    keyboardImagePath,
    keyboardFeatures,
  } = req.body;

  try {
    await keyboardSchema.findOneAndUpdate(
      { id: keyboardId },
      {
        name: keyboardName,
        desc: keyboardDesc,
        price: keyboardPrice,
        discountRate: keyboardDiscountRate,
        stock: keyboardStock,
        imageUrl: keyboardImageUrl,
        imagePath: keyboardImagePath,
        features: {
          color: keyboardFeatures.color,
        },
        updatedAt: Date.now(),
      },
    );

    res.json({ message: `succesfully updated (id: ${keyboardId})` });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// SEARCH
export const searchKeyboard = async (req: Request, res: Response) => {
  const { keyboardInfo } = req.query;
  try {
    const result: IKeyboard[] = await keyboardSchema.find();
    const searchKeyboard = result.filter((keyboard) => {
      if (
        keyboard.name.includes(keyboardInfo as string) ||
        keyboard.desc.includes(keyboardInfo as string)
      ) {
        return keyboard;
      }
    });

    res.json({
      message: `Succesfully SearchInfo ${keyboardInfo}`,
      searchKeyboard,
    });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// Get Keyboard By Id
export const getKeyboardById = async (req: Request, res: Response) => {
  const { keyboardId } = req.query;
  try {
    const result: IKeyboard = await keyboardSchema.findOne({ id: keyboardId });

    res.json({
      message: `Succesfully get a keyboard`,
      result,
    });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }

  res.json('string');
};
