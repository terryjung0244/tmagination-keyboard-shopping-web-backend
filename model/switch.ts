export interface ISwitch {
  category: string;
  switchId: string;
  switchName: string;
  switchDesc: string;
  switchPrice: string;
  switchDiscountRate: number;
  switchStock: string;
  switchFeatures: {
    color: string;
  };
  switchImageUrl: string;
  switchImagePath: string;
  createdAt: Date;
  updatedAt: Date;
}
