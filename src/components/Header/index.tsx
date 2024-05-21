import Image from "next/image";
import style from "@/styles/components/_header.module.scss"

export default function Header() {
  return (
    <header className={style.header_container}>
      <div className={style.container_logo}>
        <span className={style.content_logo}><span>MKS</span>Sistemas</span>
      </div>

      <div className={style.container_icon_car_shop}>
        <Image
          src="/icon-car-shop.svg"
          alt="icon car shop"
          width={19.1}
          height={18}
        />
        <span>0</span>
      </div>
    </header>
  );
};
