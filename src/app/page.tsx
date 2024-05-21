import Header from "@/components/Header";
import Products from "@/components/Products";
import { products } from "../../mockProducts";

import style from "@/styles/pages/_home.module.scss";
  
export default function Home() {
  return (
    <main className={style.home_container}>
      <Header />

      <section className={style.section_products_container}>
        <ul className={style.list_products_content}>
          {products.map((product) => (
            <li key={product.id}>
              <Products
                id={product.id}
                name={product.name}
                photo={product.photo}
                description={product.description}
                price={ product.price  }
              />
            </li>
        ))}

        </ul>
      </section>
    </main>
  );
}
