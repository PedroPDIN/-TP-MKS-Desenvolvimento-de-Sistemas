import Products from "@/components/Products";

import style from "@/styles/pages/_home.module.scss";
import { IProducts } from "@/interfaces/IDataProducts.interface";
  
export default async function Home() {
  const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC";
  const res = await fetch(url);
  const data: IProducts = await res.json();

  return (
    <main className={style.home_container}>
      <section className={style.section_products_container}>
        <ul className={style.list_products_content}>
          {data.products.map((product) => (
            <li key={product.id}>
              <Products
                id={product.id}
                name={product.name}
                photo={product.photo}
                description={product.description}
                price={ product.price }
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
