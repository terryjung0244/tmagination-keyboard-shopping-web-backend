import mongoose from 'mongoose';

const keyboardSchema = new mongoose.Schema({
  category: { type: String, required: [true] },
  keyboardId: { type: String, required: [true] },
  keyboardName: { type: String, required: [true] },
  keyboardDesc: { type: String },
  keyboardPrice: { type: String, required: [true] },
  keyboardDiscountRate: { type: String },
  keyboardStock: { type: String },
  keyboardFeatures: {
    color: { type: String },
    switch: { type: String },
  },
  keyboardImageUrl: { type: String },
  keyboardImagePath: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export default mongoose.model('Keyboard', keyboardSchema);
