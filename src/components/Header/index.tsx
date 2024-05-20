import Image from "next/image";

export default function Header() {
  return (
    <header>
      <figure id="container-logo">
        <span id="content-logo"><span>MKS</span>Sistemas</span>
      </figure>

      <div id="container-icon-car-shop">
        <Image
          src="/icon-car-shop.svg"
          alt="icon car shop"
          width={19.1}
          height={18}
        />
        <span>0</span>
      </div>
    </header>
  )
}