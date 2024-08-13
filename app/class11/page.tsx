"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Iframe from "@/components/ui/iframe";
import { Breadcrumb } from "@/components/ui/breadcrumbs";
const MyPage = () => {
  const [visibleLessons, setVisibleLessons] = useState<string | null>(null);
  const [currentIdentifier, setCurrentIdentifier] = useState<string>("default");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      title: "Class 9",
      description: "*Unavailable!!*",
      link: "##",
    },
    {
      title: "Class 10",
      description: "Available",
      link: "../pages/class10/Nepali",
    },
    {
      title: "Class 11",
      description: "Available",
      link: "##",
    },
    {
      title: "Class 12",
      description: "Unavailable!!",
      link: "##",
    },
  ];

  const subs = [
    {
      title: "Java",
      description: "Available",
      link: "/pages/class11/Javaa",
    },
    {
      title: "WMAD",
      description: "Available",
      link: "/pages/class11/WMAD",
    },
    {
      title: "Operating System",
      description: "Available",
      link: "/pages/class11/OS",
    },
    {
      title: "Math",
      description: "Unavailable!!",
      link: "##",
    },
  ];

  const lessons = [
    {
      title: "Unit1",
      description: "Unavailable!!",
      link: "##",
    },
    {
      title: "Unit2",
      description: "Available",
      link: "##",
    },
    {
      title: "Unit3",
      description: "Available",
      link: "##",
    },
    {
      title: "Unit4",
      description: "Unavailable!!",
      link: "##",
    },
    {
      title: "Unit5",
      description: "Unavailable!!",
      link: "##",
    },
    {
      title: "Unit6",
      description: "Unavailable!!",
      link: "##",
    },
    {
      title: "Unit7",
      description: "Unavailable!!",
      link: "##",
    },
    {
      title: "Unit8",
      description: "Unavailable!!",
      link: "##",
    },
  ];
  const pagination = [
    { label: "Home", href: "/" },
    { label: "Class 11", href: "/class10/" },
    // { label: "DBMS", href: "/app/pages/class10/DBMS" },
  ];

  return (
    <main>
      <div className=" h-screen rounded-md bg-black flex flex-col w-auto lg:px-28 sm:px-4 pt-2">
        {" "}
        <div className="hero flex justify-center flex-col pt-16 w-auto">
          <Breadcrumb className=" z-10" items={pagination} />

          <ShootingStars />
          <StarsBackground />
          <HoverEffect
            items={lessons}
            className="lesson hidden"
            // onCardClick={handleCardClick}
          />
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-5xl">
              {[...Array(4)].map((_, index) => (
                <Skeleton
                  key={index}
                  height={150}
                  className="mb-4 rounded-7xl"
                  baseColor="#090909"
                  highlightColor="#444"
                />
              ))}
            </div>
          ) : (
            <HoverEffect
              items={subs}
              className="subs "
              // onCardClick={handleCardClick}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPage;
