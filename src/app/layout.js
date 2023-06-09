import Header from "./components/Header";
import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({ weight: "400", display: "swap", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
