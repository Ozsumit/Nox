import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import logo from "../components/image/logo.svg";
export const metadata: Metadata = {
  title: "Nox",
  description: "Need help with your homework?? I gotchu",
  // <link rel="icon" href="/favicon.ico" sizes="any" />
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className="  fadefromblack opacity-0 h-screen rounded-md bg-black flex flex-col w-auto px-4 pt-2 scroll-smooth">
        <div className=" ">
          <div className="navigation flex justify-between items-center text-2xl">
            <a href="/" className="logoxdc">
              <Image
                priority
                width={100}
                height={100}
                src={logo}
                alt="Follow us on Twitter"
                className="mb-4 "
              />
            </a>
            <div className=" nav hidden md:flex lg:flex border border-white dark:border-white/[0.2] group-hover:border-slate-70">
              <a className=" font-mono" href=".">
                Home
              </a>
              <a className=" font-mono" href="./contact">
                Contact{" "}
              </a>
              <a className=" font-mono" href=".">
                Dev
              </a>
              <div className="w-1 hidden"></div>
            </div>
            <div className="w-1 hidden lg:flex"></div>
            <div className=" nav2 md:hidden lg:hidden flex-row flex justify-center  border-l border-white dark:border-white/[0.2] items-center py-3 group-hover:border-slate-70">
              <a className=" font-mono" href=".">
                Home
              </a>
              <a className=" font-mono" href="./contact">
                Contact{" "}
              </a>
              <a className=" border-none font-mono" href=".">
                Dev{" "}
              </a>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
