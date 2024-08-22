// import Hero from "@/components/Hero";
import { ThemeProvider } from "next-themes";
import { HoverEffect } from "@/components/ui/card-hover-effect";
// import Navigation from "@/components/ui/Navigation";
// import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const MyPage = () => {
  const items = [
    {
      title: "Class 9",
      description: "Available",
      link: "/class9",
    },
    {
      title: "Class 10",
      description: "Available",
      link: "/class10",
    },
    {
      title: "Class 11",
      description: "Available",
      link: "/class11",
    },
    {
      title: "Class 12",
      description: "Available",
      link: "/class12",
    },
    {
      title: "Question Papers",
      description: "*Available!!*",
      link: "/Questions",
    },
  ];

  return (
    <main>
      <div className=" h-screen rounded-md bg-black flex flex-col w-auto lg:px-28 sm:px-4 pt-2">
        <div className="hero flex justify-center  flex-col lg:pt-16 sm:pt-0 w-auto sm:border-t-0 sm:border-t-white">
          <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl text-center tracking-tight font-medium flex justify-center items-center gap-2 sm:mx-4 md:gap-8">
            <span className="clipbg bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-transparent">
              The Repo
            </span>
            <span className="text-white text-lg font-bold">×</span>
            <span className="clipbg bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-transparent">
              Nox
            </span>
          </h2>

          <ShootingStars />
          <StarsBackground />
          <HoverEffect
            items={items}
            className="my-custom-class fade-from-right"
          />
        </div>
      </div>
    </main>
  );
};

export default MyPage;
