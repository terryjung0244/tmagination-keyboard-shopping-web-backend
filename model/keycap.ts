export interface IKeycap {
  category: string;
  createdAt: string;
  desc: string;
  discountRate: string;
  features: {
    color: string;
    switch?: string;
  };
  id: string;
  imagePath: string;
  imageUrl: string;
  name: string;
  price: string;
  stock: string;
  updatedAt: string;
}
