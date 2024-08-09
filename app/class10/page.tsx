"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Iframe from "@/components/ui/iframe";
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
      description: "Unavailable!!",
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
      title: "Nepali",
      description: "Unavailable!!",
      link: "../pages/class10/Nepali",
    },
    {
      title: "WMAD",
      description: "Available",
      link: "../pages/class10/WMAD",
    },
    {
      title: "Social",
      description: "Available",
      link: "##",
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
      description: "Available",
      link: "##",
    },
    {
      title: "Unit7",
      description: "Available",
      link: "##",
    },
    {
      title: "Unit8",
      description: "Unavailable!!",
      link: "##",
    },
  ];

  return (
    <main>
      <div className="min-h-screen h-auto rounded-md bg-black flex flex-col w-auto px-28 pt-2">
        <div className="hero flex justify-center flex-col pt-16 w-auto">
          {isLoading ? (
            <Skeleton
              width={900}
              height={80}
              className="mb-4 flex justify-center items-center self-center       "
              baseColor="#090909"
              highlightColor="#444"
            />
          ) : (
            <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
              <span>Class 10</span>
              <span className="text-grays text-lg font-thin">x</span>
              <span>Star Background</span>
            </h2>
          )}
          <ShootingStars />
          <StarsBackground />
          <HoverEffect
            items={items}
            className="hidden"
            // onCardClick={handleCardClick}
          />
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-5xl">
              {[...Array(8)].map((_, index) => (
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
              items={lessons}
              className="lesson"
              // onCardClick={handleCardClick}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPage;
