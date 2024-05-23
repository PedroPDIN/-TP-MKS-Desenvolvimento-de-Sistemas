import style from "@/styles/components/_footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer_container} data-testid="element-footer">
      MKS sistemas © Todos os direitos reservados
    </footer>
  );
};
