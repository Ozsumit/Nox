"use client";
import React, { useState } from "react";
// import Navigation from "@/components/ui/Navigation";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const MyPage = () => {
  const [visibleLessons, setVisibleLessons] = useState<string | null>(null);

  const toggleLessons = (subjectTitle: string) => {
    setVisibleLessons((currentVisible) =>
      currentVisible === subjectTitle ? null : subjectTitle
    );
  };

  const items = [
    {
      title: "Class 9",
      description: "Unavailable!!",
      link: "##",
    },
    {
      title: "Class 10",
      description: "Available",
      link: "##",
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
          <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            <span>Class 10</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>WMAD</span>
          </h2>
          <ShootingStars />
          <StarsBackground />
          <HoverEffect items={items} className="  hidden" />
          <HoverEffect items={lessons} className=" lesson" />
        </div>
      </div>
    </main>
  );
};

export default MyPage;
