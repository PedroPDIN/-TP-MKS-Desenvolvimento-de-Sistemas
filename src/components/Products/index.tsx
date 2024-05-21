import Image from "next/image";
import BtnProduct from "../BtnProduct";

import style from "@/styles/components/_products.module.scss";

interface Props {
  id: number;
  name: string;
  photo: string;
  price: string;
  description: string;
}

export default function Products({ id, name, photo, price, description }: Props) {
  return (
    <article className={style.article_product_container}>
      <figure className={style.thumbnail_product_container}>
        <Image
          src={photo}
          alt={`thumbnail-product-${name}`}
          width={121.64}
          height={138}
        />
      </figure>
      
      <div className={style.content_title_price}>
        <h2>{name}</h2>
        <span>{"R$" + Math.trunc(+price)}</span>
      </div>

      <p className={style.content_product_description}>{description}</p>

      <BtnProduct
        id={id}
        name={name}
        photo={photo}
        price={+price}
        amount={1}
      />
    </article>
  );
};