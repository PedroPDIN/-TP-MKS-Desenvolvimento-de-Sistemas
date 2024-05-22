'use client'

import Image from "next/image";
import { IContextProduct } from "@/interfaces/IContextProducts.interface";
import { useMainContext } from "@/hooks/useMainContext";

import style from "@/styles/components/_btnProduct.module.scss";

interface Props extends IContextProduct {}

export default function BtnProduct(data: Props) {
  const { addProduct } = useMainContext();

  const clickEvent = (): void => {
    addProduct(data);
  }

  return (
    <button
      className={style.btn_content_product}
      onClick={clickEvent}
      type="button"
    >
      <Image
        src="/shopping-bag.svg"
        alt="icon-shopping-bag"
        width={12}
        height={13.5}
      />
      COMPRAR
    </button>
  )
}