import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MainProvider } from "@/store/Context/Main.context";
import { Montserrat } from "next/font/google";
import "../styles/main.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Desenvolvimento de Sistemas",
  description: "omos uma empresa inovadora no setor de tecnologia, dedicada a desenvolver soluções robustas e escaláveis para aplicativos e sistemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <MainProvider>
          <Header />
            {children}
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
