import { Request, Response } from 'express';
import keycapSchema from './../schema/keycap';
import { getUuid } from './../util/uuid';
import { IKeycap } from 'model/keycap';

// Get All Keycaps
export const getAllKeycaps = async (req: Request, res: Response) => {
  try {
    const result: IKeycap[] = await keycapSchema.find();
    res.json({ message: 'Succesfully get all switches', result });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// CREATE
export const createKeycap = async (req: Request, res: Response) => {
  const {
    keycapName,
    keycapDesc,
    keycapPrice,
    keycapDiscountRate,
    keycapStock,
    uploadedImageUrl,
    uploadedImagePath,
    keycapFeatures,
  } = req.body;

  try {
    const keycapId = getUuid();
    const category = 'KEYCAP';
    const newKeycap = new keycapSchema({
      category,
      id: keycapId,
      name: keycapName,
      desc: keycapDesc,
      price: keycapPrice,
      discountRate: keycapDiscountRate,
      stock: keycapStock,
      features: {
        color: keycapFeatures.color,
      },
      imageUrl: uploadedImageUrl,
      imagePath: uploadedImagePath,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    await newKeycap.save();
    res.json({ message: 'Successfully Added as New Keycap' });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// SEARCH

export const searchKeycap = async (req: Request, res: Response) => {
  const { searchInput } = req.query;
  try {
    const result: IKeycap[] = await keycapSchema.find();
    console.log(result);
    const filteredResult = result.filter((filtered: IKeycap) => {
      if (
        filtered.name.includes(searchInput as string) ||
        filtered.desc.includes(searchInput as string)
      ) {
        return filtered;
      }
    });
    res.json({
      message: `Successfully Search info ${searchInput}`,
      filteredResult,
    });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// Delete

export const deleteKeycap = async (req: Request, res: Response) => {
  const { keycapId, keycapName } = req.query;
  console.log(keycapId, keycapName);
  try {
    await keycapSchema.findOneAndDelete({
      id: keycapId,
    });
    res.json({
      message: `Successfully Deleted Switch Name : ${keycapName}`,
    });
  } catch (err) {
    console.log(err);
  }
};

// Update

export const updateKeycap = async (req: Request, res: Response) => {
  const {
    keycapId,
    keycapName,
    keycapDesc,
    keycapPrice,
    keycapDiscountRate,
    keycapStock,
    keycapImageUrl,
    keycapImagePath,
    keycapFeatures,
  } = req.body;

  try {
    await keycapSchema.findOneAndUpdate(
      { id: keycapId },
      {
        name: keycapName,
        desc: keycapDesc,
        price: keycapPrice,
        discountRate: keycapDiscountRate,
        stock: keycapStock,
        imageUrl: keycapImageUrl,
        imagePath: keycapImagePath,
        features: {
          color: keycapFeatures.color,
        },
        updatedAt: Date.now(),
      },
    );
    res.json({ message: `succesfully updated (id: ${keycapName})` });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
