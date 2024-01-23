import mongoose from 'mongoose';

const keyboardSchema = new mongoose.Schema({
  keyboardId: { type: String, required: [true] },
  keyboardName: { type: String, required: [true] },
  keyboardDesc: { type: String },
  keyboardPrice: { type: Number, required: [true] },
  keyboardDiscountRate: { type: Number },
  keyboardStock: { type: String },
  keyboardFeatures: {
    color: { type: [String] },
    switch: { type: [String] },
  },
  keyboardImageUrl: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export default mongoose.model('Keyboard', keyboardSchema);
