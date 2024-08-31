"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../components/image/logo.svg";
import SearchEngine from "@/components/ui/searchEngine";
// import { Button } from "@/components/ui/button";
import React, { useCallback } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="fadefromblack opacity-0 h-screen rounded-md bg-black flex flex-col w-auto px-4 pt-2 scroll-smooth">
        <div>
          <div className="navigation flex justify-between items-center text-2xl flex-col lg:flex-row">
            <Link href="/" className="logoxdc w-auto h-auto z-50">
              <Image
                priority
                width={100}
                height={100}
                src={logo}
                alt="Logo"
                className="mb-4"
              />
            </Link>
            <div className="z-50 text-white nav hidden md:flex lg:flex border border-white dark:border-white/[0.2] group-hover:border-slate-70 items-center justify-around px-4 py-2 rounded-md">
              <Link href="/" className="font-mono">
                Home
              </Link>
              <Link href="/contact" className="font-mono">
                Contact
              </Link>
              <Link href="/Dev" className="font-mono">
                Dev
              </Link>
              <Link href="/QuickFind" className="font-mono">
                QFind
              </Link>
            </div>

            <div className="nav2 md:hidden lg:hidden flex-row mb-10 flex justify-center border-l border-white dark:border-white/[0.2] items-center py-3 group-hover:border-slate-70">
              <Link href="/" className="font-mono">
                Home
              </Link>
              <Link href="/contact" className="font-mono">
                Contact
              </Link>
              <Link href="/Dev" className="font-mono">
                Dev
              </Link>
              <Link href="/QuickFind" className="font-mono">
                QFind
              </Link>
            </div>
            {/* <SearchEngine /> */}
            <div></div>
          </div>
        </div>
        <div className="flex flex-col justify-center item-center">
          {children}

          <Toaster />
        </div>
        <div className="flex flex-col justify-center items-center w-[95vw]">
          <Link href="/donate" className="font-mono">
            <button className="mt-4 px-4 py-2  duration-500 bg-orange-500 text-white rounded hover:bg-blue-600 transition-colors  z-10">
              Donate
            </button>
          </Link>
        </div>
      </body>
    </html>
  );
}
