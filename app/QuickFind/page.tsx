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
      <div className=" items-center h-screen rounded-md bg-black flex flex-col w-auto lg:px-28 sm:px-4 pt-2">
        <div className="hero flex justify-center  flex-col lg:pt-16 sm:pt-0 sm:w-screen w-auto sm:border-t-0 sm:border-t-white">
          {/* <ContactUs />? */}
          {/* <ContactUs /> */}
          <SearchEngine />

          <ShootingStars />
          <StarsBackground />
        </div>
      </div>
    </main>
  );
};

export default MyPage;
