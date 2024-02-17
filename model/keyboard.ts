export interface IKeyboard {
  category: string;
  keyboardId: string;
  keyboardName: string;
  keyboardDesc: string;
  keyboardPrice: string;
  keyboardDiscountRate: number;
  keyboardStock: string;
  keyboardFeatures: {
    color: string;
    switch: string;
  };
  keyboardImageUrl: string;
  keyboardImagePath: string;
  createdAt: Date;
  updatedAt: Date;
}
