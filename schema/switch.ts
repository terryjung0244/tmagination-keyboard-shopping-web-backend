import mongoose from 'mongoose';

const switchSchema = new mongoose.Schema({
  category: { type: String, required: [true] },
  switchId: { type: String, required: [true] },
  switchName: { type: String, required: [true] },
  switchDesc: { type: String },
  switchPrice: { type: String, required: [true] },
  switchDiscountRate: { type: String },
  switchStock: { type: String },
  switchFeatures: {
    color: { type: String },
  },
  switchImageUrl: { type: String },
  switchImagePath: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export default mongoose.model('Switch', switchSchema);
