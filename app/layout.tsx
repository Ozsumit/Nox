import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import logo from "../components/image/logo.svg";
export const metadata: Metadata = {
  title: "Lighthouse",
  description: "Your Academic ally",
  // <link rel="icon" href="/favicon.ico" sizes="any" />
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className="h-screen rounded-md bg-black flex flex-col w-auto px-4 pt-2 scroll-smooth">
        <div>
          <div className="navigation flex justify-between items-center text-2xl">
            <a href="index.html#Home" className="logoxdc">
              <Image
                priority
                width={100}
                height={100}
                src={logo}
                alt="Follow us on Twitter"
              />
            </a>
            <div className=" nav">
              <a className=" font-mono" href="/">
                Home
              </a>
              <a className=" font-mono" href="contact.html">
                Contact{" "}
              </a>
              <a className=" font-mono" href="Dev.html#GuessingGame">
                Dev{" "}
              </a>
            </div>
            <div className="w-1"></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
