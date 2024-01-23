interface IKeyboard {
  keyboardId: string;
  keyboardName: string;
  keyboardDesc: string;
  keyboardPrice: string;
  keyboardDiscountRate: number;
  keyboardStock: string;
  keyboardFeatures: {
    color: string[];
    switch: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export { IKeyboard };
