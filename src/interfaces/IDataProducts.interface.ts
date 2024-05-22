interface IValueProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}


export interface IProducts {
  products: IValueProducts[];
  count: number;
};
