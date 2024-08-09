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
      description: "Ujyalo Yatra",
      link: "#pdf",
    },
    {
      title: "Unit 2",
      description: "Ghar Jhagada",
      link: "#pdf",
    },
    {
      title: "Unit 3",
      description: "Chikitsa  bigyaan ra Aayurbed Chikitsa",
      link: "#pdf",
    },
    {
      title: "Unit 4 ",
      description: "Yesto Kailyai Nahos",
      link: "#pdf",
    },
    {
      title: "Unit 5",
      description: "Laxmi Prasad Devkota",
      link: "#pdf",
    },
    {
      title: "Unit 6",
      description: "Adhikar Thulo ki Kartavya Thulo",
      link: "#pdf",
    },
    {
      title: "Unit 7",
      description: "Satru",
      link: "#pdf",
    },
    {
      title: "Unit 8",
      description: "Nepali Hamro Shram Ra Sip",
      link: "#pdf",
    },
    {
      title: "Unit 9 ",
      description: "Mero Desh Ko Sikshya",
      link: "#pdf",
    },
    {
      title: "Unit 10",
      description: "Byabasahik Chithi",
      link: "#pdf",
    },
    {
      title: "Unit 11",
      description: "Kartabya",
      link: "#pdf",
    },
    {
      title: "Unit 12",
      description: "Pablo Picasso",
      link: "#pdf",
    },
    {
      title: "Unit 13",
      description: "Pakhnos!",
      link: "#pdf",
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
