'use client'

import { createContext, useState, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
};

export interface DataProduct {
  id: number;
  photo: string;
  name: string;
  price: number;
  amount: number;
};

export interface IDataContext {
  addProduct: (data: DataProduct) => void,
  dataProducts: DataProduct[]
};

// context
const MainContext = createContext({} as IDataContext);

// provider
export function MainProvider({ children }: Props) {
  const [dataProducts, setDataProducts] = useState<DataProduct[] | []>([]);

  const addProduct = (data: DataProduct): void => {
    setDataProducts([...dataProducts, data])
  }


  const contextValue = {
    addProduct,
    dataProducts,
  };

  return (
    <MainContext.Provider value={contextValue} >
      {children}
    </MainContext.Provider>
  )
}

export default MainContext;