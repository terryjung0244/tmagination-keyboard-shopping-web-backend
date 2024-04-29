import mongoose from 'mongoose';

const switchSchema = new mongoose.Schema({
  category: { type: String, required: [true] },
  id: { type: String, required: [true] },
  name: { type: String, required: [true] },
  desc: { type: String },
  price: { type: String, required: [true] },
  discountRate: { type: String },
  stock: { type: String },
  features: {
    color: { type: [String] },
  },
  imageUrl: { type: String },
  imagePath: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export default mongoose.model('Switch', switchSchema);
