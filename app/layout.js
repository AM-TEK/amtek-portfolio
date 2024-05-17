import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alejandro M | Web Developer",
  description: "Alejandro Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-300 text-gray-900 pt-28 sm:pt-36`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
