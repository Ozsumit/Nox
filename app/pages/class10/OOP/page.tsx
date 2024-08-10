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
    }, 1000);

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
      description: "Introduction to Object Oriented Programming",
      link: "#pdf",
    },
    {
      title: "Unit 2",
      description: "Unavailable",
      link: "#pdf",
    },
    {
      title: "Unit 3",
      description: "Unavailable",
      link: "#pdf",
    },
    {
      title: "Unit 4 ",
      description: "Unavaialable",
      link: "#pdf",
    },
    {
      title: "Unit 5",
      description: "Unavailable",
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
    { label: "Class 10", href: "/class10/" },
    { label: "DBMS", href: "/app/pages/class10/OOP" },
  ];

  return (
    <main>
      <div className="min-h-screen h-auto rounded-md bg-black flex flex-col w-auto px-28 pt-2">
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
