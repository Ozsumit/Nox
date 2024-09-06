"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../components/image/logo.svg";
import Link from "next/link";
import { Home, Phone, CodeXml, Search, DollarSign, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import PulsatingButton from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  // label: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, title }) => (
  <Link
    title={title}
    href={href}
    className="group flex items-center space-x-10 px-4 py-2 rounded-md transition-all duration-300"
  >
    {/* <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {label}
    </span> */}
    <Icon
      size={30}
      className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
    />
  </Link>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY < 20) {
        // Show navbar at the top of the page
        setShowNav(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar when scrolling down
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        // Show navbar when scrolling up
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <title>Twilight</title>
      <body className="bg-black text-white min-h-screen mx-4 lg:mx-0 flex flex-col">
        <header
          className={` w-full z-50 transition-all duration-300 ${
            scrolled ? "" : "bg-transparent"
          }`}
        >
          <div className="navigation flex flex-row justify-center items-center w-[98vw] mx-2">
            <div className="flex w-[98vw] lg:justify-between justify-between  items-center py-4">
              <Link href="/" className="flex items-center">
                <Image width={100} height={100} src={logo} alt="Logo" />
              </Link>

              <nav
                className={`hidden md:flex  transition-all duration-300 nav gap-7 bg-black  border border-white/[0.2] dark:border-white/[0.2] group-hover:border-slate-70 items-center justify-evenly px-4 py-2 rounded-md ${
                  scrolled ? "" : "bg-transparent"
                }  `}
              >
                <NavItem href="/" icon={Home} title="Home" />
                <NavItem href="/contact" icon={Phone} title="Contact" />
                <NavItem href="/Dev" icon={CodeXml} title="Dev" />
                <NavItem href="/QuickFind" icon={Search} title="Quick find" />
              </nav>
              <div className=" hidden P-4 mr-4 lg:flex">
                {" "}
                {/* <PulsatingButton

                // className="px-5 py-3 bg-gradient-to-r  from-green-400 to-green-600 text-white rounded-md hover:from-green-500 hover:to-green-700 transition-all duration-300 flex items-center space-x-2"
                // className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md hover:from-orange-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2"
                >
                  Donate
                  <DollarSign size={20} />
                </PulsatingButton> */}
                <Link href="/donate" className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#94fc02] to-[#294c83] rounded-lg" />
                  <div className="px-8 py-2 flex flex-row items-center justify-center bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Donate
                    <DollarSign size={20} />
                  </div>
                </Link>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden  mr-16 text-white"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } p-4 transition-all z-[100] bg-gray-600 justify-center  w-[99vw] items-center flex flex-col   duration-300`}
          >
            <NavItem href="/" icon={Home} title="Home" />
            <NavItem href="/contact" icon={Phone} title="Contact" />
            <NavItem href="/Dev" icon={CodeXml} title="Dev" />
            <NavItem href="/QuickFind" icon={Search} title="Quick find" />
            <Link
              href="/donate"
              className="flex items-center space-x-2 px-3 py-2 mt-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md hover:from-orange-600 hover:to-pink-600 transition-all duration-300"
            >
              <span>Donate</span>
              <DollarSign size={20} />
            </Link>
          </div>
        </header>

        <main className=" justify-center items-center flex-col flex">
          {children}
        </main>

        <Toaster />
      </body>
    </html>
  );
}
