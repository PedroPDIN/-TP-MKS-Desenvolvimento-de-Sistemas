'use client'

import { createContext, useState, ReactNode, useEffect } from "react";
import { IContextProduct } from "@/interfaces/IContextProducts.interface";
import Swal from 'sweetalert2';

interface Props {
  children: ReactNode;
};

export interface IDataContext {
  addProduct: (data: IContextProduct) => void,
  dataProducts: IContextProduct[],
  totalPrice: number;
  updateAmountProduct: (id: number, type: "add" | "remove") => void;
  removeProduct: (id: number) => void;
  clickConfirm: () => void;
};

// context
const MainContext = createContext({} as IDataContext);

// provider
export function MainProvider({ children }: Props) {
  const [dataProducts, setDataProducts] = useState<IContextProduct[] | []>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addProduct = (data: IContextProduct): void => {
    const existProduct = dataProducts.some((product) => product.id === data.id);

    if (existProduct) { 
      updateAmountProduct(data.id, "add");
    } else {
      setDataProducts([...dataProducts, data])
    };
  };

  const updateAmountProduct = (id: number, type: "add" | "remove"): void => {
    const newListProduct = dataProducts.map((product) => {
      if (product.id === id) {
        
        let updatedAmount = type === "add" ? product.amount + 1 : product.amount - 1;
        if (updatedAmount < 0) updatedAmount = 0;
        const updatedProduct = { ...product, amount: updatedAmount };
        return updatedProduct;
      };
      return product;
    });

    setDataProducts(newListProduct);
  };

  const removeProduct = (id: number): void => {
    const newListProduct = dataProducts.filter((product) => product.id !== id);
    setDataProducts(newListProduct)
  };

  const clickConfirm = (): void => {
    if (dataProducts.length > 0) {
      setDataProducts([]);
  
      Swal.fire({
        title: "Obrigado!",
        text: `Compra com o valor de R$ ${totalPrice}, foi realizado com sucesso.`,
        icon: "success",
        confirmButtonColor: "#0F52BA",
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: `Parece que o carrinho está vazio.`,
        icon: "question"
      });
    };
  };

  useEffect(() => {
    const updatedTotalPrice = dataProducts.reduce((total, product) => {
      return total + (product.price * product.amount);
    }, 0);

    setTotalPrice(updatedTotalPrice);
  }, [dataProducts]);

  const contextValue = {
    addProduct,
    dataProducts,
    totalPrice,
    updateAmountProduct,
    removeProduct,
    clickConfirm,
  };

  return (
    <MainContext.Provider value={contextValue} >
      {children}
    </MainContext.Provider>
  )
}

export default MainContext;