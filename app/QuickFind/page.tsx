// import Hero from "@/components/Hero";
import { HoverEffect } from "@/components/ui/card-hover-effect";
// import Navigation from "@/components/ui/Navigation";
// import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";
import Image from "next/image";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
// import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
// import MessageBox from "@/components/ui/messagebox";
import ContactUs from "@/pages/message";
import SearchEngine from "@/components/ui/searchEngine";
// import CompanyDetails from "@/components/ui/company";
// import MessageBox, { ContactUs } from "@/components/ui/messagebox";

const MyPage = () => {
  return (
    <main>
      <div className=" sengine overflow-x-hidden  items-center h-screen rounded-md bg-black flex flex-col w-[95vw] lg:px-28 sm:px-4 pt-2">
        <div className="hero flex justify-center items-center  flex-col lg:pt-16 sm:pt-0 sm:w-screen w-[95vw] sm:border-t-0 sm:border-t-white">
          {/* <ContactUs />? */}
          {/* <ContactUs /> */}
          <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl text-center tracking-tight font-medium flex justify-center items-center gap-2 sm:mx-4 md:gap-8">
            <span className="clipbg bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-transparent">
              QuickFind
            </span>
          </h2>
          <SearchEngine />

          <ShootingStars />
          <StarsBackground />
        </div>
      </div>
    </main>
  );
};

export default MyPage;
