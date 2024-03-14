import type { Metadata } from "next";
import "./../../public/css/style.css"
import Header from "./header/header";
import Carrossel from "./carrossel/carrossel";
import Card from "./card/card";

export const metadata: Metadata = {
  title: "Criando um layout",
  description: "Chupetinha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header/>
          <Carrossel/>
          <Card/>
          {children}
        </main>
      </body> 
    </html>
  );
}
