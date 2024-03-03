export interface ISwitch {
  category: string;
  id: string;
  name: string;
  desc: string;
  price: string;
  discountRate: number;
  stock: string;
  features: {
    color: string;
  };
  imageUrl: string;
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
}
