'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { useMainContext } from "@/hooks/useMainContext";

import style from "@/styles/components/_header.module.scss"

export default function Header() {
  const { dataProducts } = useMainContext();
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  console.log(dataProducts)

  const OpenSideBar = (): void => {
    setOpenSideBar(!openSideBar)
  };

  const sidebarStyle = {
    display: openSideBar ? "block" : "none",
  };


  return (
    <header className={style.header_container}>
      <div className={style.container_logo}>
        <span className={style.content_logo}><span>MKS</span>Sistemas</span>
      </div>

      <button
        className={style.container_icon_car_shop}
        onClick={OpenSideBar}
      >
        <Image
          src="/icon-car-shop.svg"
          alt="icon car shop"
          width={19.1}
          height={18}
        />
        <span>{dataProducts.length}</span>
      </button>

      <div className={style.sidebar_car_shop} style={sidebarStyle}>
        <div>
          <span>Carrinho de compras</span>
          <button
            onClick={OpenSideBar}
          >
            <Image
              src="/Close_cart.svg"
              alt="icon close cart"
              width={38}
              height={38}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
