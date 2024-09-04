"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Iframe from "@/components/ui/iframe";
import Link from "next/link";
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

  const toggleLessons = (subjectTitle: string) => {
    setVisibleLessons((currentVisible) =>
      currentVisible === subjectTitle ? null : subjectTitle
    );
  };

  const handleCardClick = (title: string) => {
    setCurrentIdentifier(title);
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
      title: "Chemistry",
      description: "Chem-9111/ Year-2081(2024)",
      link: "#pdf",
    },
    {
      title: "Physics",
      description: "Physics-1021'Q'/ Year-2080(2023)",
      link: "#pdf",
    },
    {
      title: "Math",
      description: "Math-0081'H'/ Year-2080(2023)",
      link: "#pdf",
    },
    {
      title: "SEP ",
      description: "Coming soon",
      link: "#",
    },
    {
      title: "Visual Programming ",
      description: "Coming Soon",
      link: "#",
    },
    {
      title: "Computer Network",
      description: "Coming Soon",
      link: "#",
    },
  ];
  const pagination = [
    { label: "Home", href: "/" },
    { label: "Questions", href: "/questionset/" },
    // { label: "WMAD", href: "/app/pages/class11/WMAD" },
  ];

  return (
    <main>
      <div className=" h-screen rounded-md bg-black flex flex-col w-auto lg:px-28 sm:px-4 pt-2">
        <div className="hero flex justify-center flex-col pt-16 w-auto">
          <Breadcrumb className=" z-10" items={pagination} />

          <ShootingStars />
          <StarsBackground />
          <HoverEffect
            items={items}
            className="hidden"
            onCardClick={handleCardClick}
          />

          <HoverEffect
            items={lessons}
            className="lesson"
            onCardClick={handleCardClick}
          />

          <div
            id="pdf"
            className="flex justify-center items-center my-16 rounded-4xl"
          >
            {isLoading ? (
              <Skeleton
                height={400}
                width="100%"
                baseColor="#090909"
                highlightColor="#444"
              />
            ) : (
              <Iframe identifier={currentIdentifier} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPage;
