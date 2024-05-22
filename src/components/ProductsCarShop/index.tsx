'use client'

import Image from "next/image"
import { useMainContext } from "@/hooks/useMainContext";

import style from "@/styles/components/_productsCarShop.module.scss";

export default function ProductsCarShop() {
  const { dataProducts, updateAmountProduct, removeProduct } = useMainContext()

  return (
    <ul className={style.products_car_shop_container}>
      {dataProducts.map((product) => (
        <li key={product.id}>
          <button
            className={style.close_product}
            onClick={() => removeProduct(product.id)}
          >
            <Image
              src={"/Close_cart.svg"}
              alt="btn close cart"
              width={18}
              height={18}
            />
          </button>

          <figure>
            <Image
              src={product.photo}
              alt={`photo ${product.name}`}
              width={46}
              height={57}
            />
          </figure>

          <span className={style.name_product}>{product.name}</span>

          <div className={style.qtd_container}>
            <span>Qtd:</span>

            <div className={style.control_qtd}>
              <button
                className={style.btn_qtd_small}
                onClick={() => updateAmountProduct(product.id, "remove")}
              >
                -
              </button>
              <div className={style.divise_btn}></div>

              <span>{ product.amount}</span>

              <div className={style.divise_btn}></div>
              <button
                className={style.btn_qtd_bigger}
                onClick={() => updateAmountProduct(product.id, "add")}
              >
                +
              </button>
            </div>
          </div>
          <span className={style.product_price}>{`R$${product.price}`}</span>
        </li>
      ))}
    </ul>
  )
}