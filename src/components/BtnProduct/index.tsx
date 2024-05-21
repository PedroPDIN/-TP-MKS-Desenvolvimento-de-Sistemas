'use client'

import Image from "next/image";
import { DataProduct } from "@/store/Context/Main.context";
import { useMainContext } from "@/hooks/useMainContext";

import style from "@/styles/components/_btnProduct.module.scss";

interface Props extends DataProduct {}

export default function BtnProduct(data: Props) {
  const { addProduct } = useMainContext();

  const clickEvent = (): void => {
    addProduct(data);
  }

  return (
    <button
      className={style.btn_content_product}
      onClick={clickEvent}
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