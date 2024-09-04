"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../components/image/logo.svg";
import Link from "next/link";
import { Home, Phone, Code, Search, DollarSign, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    className="group flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300"
  >
    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {label}
    </span>
    <Icon
      size={20}
      className="text-gray-400 group-hover:text-white transition-colors duration-300"
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
                className={`hidden md:flex border transition-all duration-300 nav bg-black  border-white dark:border-white/[0.2] group-hover:border-slate-70 items-center justify-around px-4 py-2 rounded-md ${
                  scrolled ? "" : "bg-transparent"
                }  `}
              >
                <NavItem href="/" icon={Home} label="Home" />
                <NavItem href="/contact" icon={Phone} label="Contact" />
                <NavItem href="/Dev" icon={Code} label="Dev" />
                <NavItem href="/QuickFind" icon={Search} label="QFind" />
              </nav>
              <div className=" hidden P-4 mr-4 lg:flex">
                {" "}
                <Link
                  href="/donate"
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md hover:from-orange-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Donate</span>
                  <DollarSign size={20} />
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
            } p-4 transition-all z-[100] bg-black justify-center  w-[99vw] items-center flex flex-col   duration-300`}
          >
            <NavItem href="/" icon={Home} label="Home" />
            <NavItem href="/contact" icon={Phone} label="Contact" />
            <NavItem href="/Dev" icon={Code} label="Dev" />
            <NavItem href="/QuickFind" icon={Search} label="QFind" />
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
