"use client";
import React, { useCallback, useEffect } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { X } from "lucide-react";
import Footer from "@/components/ui/footer"; // Import the Footer component

const MyPage: React.FC = () => {
  // const showToast = useCallback(() => {
  //   setTimeout(() => {
  //     toast(
  //       <div className="flex items-center justify-between w-full">
  //         <span>
  //           Admin Needs Urgent Help.{` `}
  //           <a
  //             href="/help" // Replace with your actual help page URL
  //             className="text-green-400 hover:text-green-200 "
  //             onClick={(e) => {
  //               e.preventDefault();
  //               toast.dismiss();
  //               // Add your navigation logic here, e.g.:
  //               // router.push('/help');
  //             }}
  //           >
  //             Know why..
  //           </a>
  //         </span>
  //         <button
  //           onClick={() => toast.dismiss()}
  //           className="ml-2  hover:text-gray-700"
  //         >
  //           <X size={18} />
  //         </button>
  //       </div>,
  //       {
  //         duration: 10000,
  //         position: "top-right",
  //         style: {
  //           background: "#850F0F",
  //           color: "#fff",
  //           border: "none",
  //           marginTop: "3rem",
  //         },
  //       }
  //     );
  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   showToast();
  // }, [showToast]);

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

  const items2 = [
    {
      title: "Class 11/12",
      description: "English Project Cover Page (Remastered & Approved)",
      link: "/downloadables/English (2).pdf",
      download: true,
    },
  ];

  return (
    <main>
      <div className="h-screen rounded-md bg-black flex flex-col w-auto lg:px-28 sm:px-4 pt-2">
        <div className="hero flex justify-center flex-col lg:pt-10 sm:pt-0 w-auto sm:border-t-0 sm:border-t-white">
          <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl text-center tracking-tight font-medium flex justify-center items-center gap-2 sm:mx-4 md:gap-8">
            <span className="clipbg bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-transparent">
              The Repo
            </span>
            <span className="text-white text-lg font-bold">×</span>
            <span className="clipbg bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-transparent">
              Twilight
            </span>
          </h2>

          <ShootingStars />
          <StarsBackground />
          <HoverEffect
            items={items}
            className="my-custom-class fade-from-right"
          />
          <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl text-center tracking-tight font-medium flex justify-center items-center gap-2 sm:mx-4 md:gap-8">
            <span className="clipbg bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-transparent">
              Miscellaneous
            </span>
            <span className="text-white text-lg font-bold">×</span>
            <span className="clipbg bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-transparent">
              Files
            </span>
          </h2>
          <HoverEffect
            items={items2}
            className="my-custom-class fade-from-right"
          />
        </div>
        <Footer items={items} />{" "}
      </div>
      {/*       <Toaster richColors /> */}
      {/* Pass the items array to the Footer component */}
    </main>
  );
};

export default MyPage;
