import { Raleway } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Alejandro M | Web Developer",
  description: "Alejandro Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${raleway.className}  text-gray-200 pt-28 sm:pt-36`}>
        <Providers>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
