import { Request, Response } from 'express';
import { ISwitch } from '../model/switch';
import switchSchema from '../schema/switch';
import { getUuid } from '../util/uuid';

// GetAllSwitches

export const getAllSwitches = async (req: Request, res: Response) => {
  try {
    const result: ISwitch[] = await switchSchema.find();
    res.json({ message: 'Succesfully get all switches', result });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// CREATE
export const createSwitch = async (req: Request, res: Response) => {
  const {
    switchName,
    switchDesc,
    switchPrice,
    switchDiscountRate,
    switchStock,
    switchFeatures,
    uploadedImageUrl,
    uploadedImagePath,
  } = req.body;

  try {
    const switchId = getUuid();
    const category = 'SWITCH';
    const newSwitch = new switchSchema({
      category,
      id: switchId,
      name: switchName,
      desc: switchDesc,
      price: switchPrice,
      discountRate: switchDiscountRate,
      stock: switchStock,
      features: {
        color: switchFeatures.color,
      },
      imageUrl: uploadedImageUrl,
      imagePath: uploadedImagePath,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    await newSwitch.save(); // save()는 mongodb에서 제공해주는 method중에 하나.
    res.json({ message: 'successfully added switch' });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

// Search

export const searchSwitches = async (req: Request, res: Response) => {
  const { searchInput } = req.query;
  console.log(searchInput);
  try {
    const result: ISwitch[] = await switchSchema.find();
    console.log(result);
    const filteredSwitches = result.filter((filtered) => {
      if (
        filtered.name.includes(searchInput as string) ||
        filtered.desc.includes(searchInput as string)
      ) {
        return filtered;
      }
    });
    res.json({
      message: `Succesfully SearchInfo ${searchInput}`,
      filteredSwitches,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete

export const deleteSwitch = async (req: Request, res: Response) => {
  const { selectedSwitchId, selectedSwitchName } = req.query;
  console.log(selectedSwitchId, selectedSwitchName);
  try {
    await switchSchema.findOneAndDelete({
      id: selectedSwitchId,
    });
    res.json({
      message: `Successfully Deleted Switch Name : ${selectedSwitchName}`,
    });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};

export const updateSwitch = async (req: Request, res: Response) => {
  const {
    switchId,
    switchName,
    switchDesc,
    switchPrice,
    switchDiscountRate,
    switchStock,
    switchImageUrl,
    switchImagePath,
    switchFeatures,
  } = req.body;
  console.log(req.body);
  try {
    await switchSchema.findOneAndUpdate(
      { id: switchId },
      {
        name: switchName,
        desc: switchDesc,
        price: switchPrice,
        discountRate: switchDiscountRate,
        stock: switchStock,
        imageUrl: switchImageUrl,
        imagePath: switchImagePath,
        features: {
          color: switchFeatures.color,
        },
        updatedAt: Date.now(),
      },
    );

    res.json({ message: `succesfully updated (id: ${switchId})` });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
  }
};
