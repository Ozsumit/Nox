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
      title: "Unit 1",
      description: "Java Fundamentals",
      link: "#pdf",
    },
    {
      title: "Unit 2",
      description: "DataTypes and Variables",
      link: "#pdf",
    },
    {
      title: "Unit 3",
      description: "Class And Objects",
      link: "#pdf",
    },
    {
      title: "Unit 4 ",
      description: "Control Statements",
      link: "#pdf",
    },
    {
      title: "Unit 5",
      description: "Unavailabe",
      link: "#",
    },
    {
      title: "Unit 6",
      description: "Unavailable",
      link: "#",
    },
  ];
  const pagination = [
    { label: "Home", href: "/" },
    { label: "Class 11", href: "/class11/" },
    { label: "Java", href: "/app/pages/class11/Java" },
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
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-5xl">
              {[...Array(6)].map((_, index) => (
                <Skeleton
                  key={index}
                  height={150}
                  className="mb-4 rounded-7xl"
                  baseColor="#000000"
                  highlightColor="#383838"
                />
              ))}
            </div>
          ) : (
            <HoverEffect
              items={lessons}
              className="lesson"
              onCardClick={handleCardClick}
            />
          )}
          <div
            id="pdf"
            className="flex justify-center items-center my-16 rounded-4xl"
          >
            {isLoading ? (
              <Skeleton
                height={400}
                width="100%"
                className="mb-4 rounded-7xl"
                baseColor="#000000"
                highlightColor="#383838"
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
