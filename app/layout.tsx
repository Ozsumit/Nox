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
      <body className="h-screen rounded-md bg-black flex flex-col w-auto sm:px-0 px-4 pt-2 scroll-smooth">
        <div>
          <div className="navigation flex-col lg:flex-row flex justify-between items-center text- lg:mx-8">
            <a href="index.html#Home" className="logoxdc">
              <Image
                priority
                width={100}
                height={100}
                src={logo}
                alt="Follow us on Twitter"
              />
            </a>
            <div className=" nav sm:w-11/12 lg:w-1/3 sm:h-auto sm:p-4 border  border-white dark:border-white/[0.2] group-hover:border-slate-70">
              <a className=" font-mono" href="/Nox">
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
