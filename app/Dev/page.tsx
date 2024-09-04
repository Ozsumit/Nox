"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Iframe from "@/components/ui/iframe";
import PersonCard from "@/components/ui/devs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DeveloperNote from "@/components/ui/readme";

interface CardItem {
  title: string;
  description: string;
  link: string;
  download?: boolean;
}

type CardGroups = {
  [key: string]: CardItem[];
};

const MyPage: React.FC = () => {
  const [currentIdentifier, setCurrentIdentifier] = useState<string>("default");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showCards, setShowCards] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [visibleLessons, setVisibleLessons] = useState<string | null>(null);
  const [currentCardGroup, setCurrentCardGroup] = useState<CardItem[]>([]);

  useEffect(() => {
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

  const cardGroups: CardGroups = {
    "dev pdfs": [
      {
        title: "Class 11/12",
        description: "English Project Cover Page (Remastered & Approved)",
        link: "/public/downloadables/A41.pdf",
        download: true,
      },
      {
        title: "Unit 2 C-10/DBMS",
        description: "Database Design",
        link: "#pdf",
      },
    ],
    "npm run dev": [
      {
        title: "React Basics",
        description: "Introduction to React Components",
        link: "#react",
      },
      {
        title: "Next.js Fundamentals",
        description: "Server-Side Rendering with Next.js",
        link: "#nextjs",
      },
    ],
    "git push": [
      {
        title: "Git Basics",
        description: "Version Control Fundamentals",
        link: "#git",
      },
      {
        title: "GitHub Workflow",
        description: "Collaborative Development with GitHub",
        link: "#github",
      },
    ],
  };

  const checkKeywords = (value: string): boolean => {
    const keywords = Object.keys(cardGroups);
    for (const keyword of keywords) {
      if (value.toLowerCase().includes(keyword)) {
        setCurrentCardGroup(cardGroups[keyword]);
        return true;
      }
    }
    return false;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkKeywords(inputValue)) {
      setShowCards(true);
    } else {
      setShowCards(false);
      setCurrentCardGroup([]);
    }
  };

  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          <span>Developers</span>
          <span className="text-white text-base md:text-lg font-thin mx-2">
            x
          </span>
          <span>Contributors</span>
        </h2>
        <ShootingStars />
        <StarsBackground className="h-full" />
        <div className="pb-4  justify-center items-center flex  flex-col">
          <div className="flex mb-4 flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
            <PersonCard
              name="Sumit Pokhrel"
              role="Developer"
              imageUrl="./images/sumit2.jpg"
              linkedin="https://www.linkedin.com/in/sumit-pokhrel-/"
              Instagram="https://www.instagram.com/sumitp0khrel/"
              github="https://github.com/ozsumit"
              email="pokhrelsumit36@gmail.com"
            />
            <PersonCard
              name="Denisha Adhikari"
              role="Contributor: Nepali/Wmad/Os"
              imageUrl="./images/denisa.jpeg"
              Instagram="https://twitter.com/johndoe"
              github="https://github.com/johndoe"
              email="john@example.com"
            />
            <PersonCard
              name="Diya Bhattarai"
              role="Developer: Bug Tester"
              imageUrl="./images/diya.jpg"
              Instagram="https://www.instagram.com/_diya_bhattarai_/"
              github="#"
              email="#"
            />
            <PersonCard
              name="Alish Gautam"
              role="Developer: Bug Tester"
              imageUrl="./images/alish.jpg"
              Instagram="https://www.instagram.com/alish_gautam11/"
              github="https://www.github.com/AZalish"
              email="alishgautam27@gmail.com"
            />
            <PersonCard
              name="Pratik Timsina"
              role="Contributor: Nepali/Wmad/Os"
              imageUrl="./images/pratik.png"
              Instagram="https://twitter.com/johndoe"
              github="https://github.com/johndoe"
              email="john@example.com"
            />
          </div>
          <div className="flex flex-row justify-start items-center">
            <div className=" sm:w-11/12 lg:w-144 backdrop:blur-md mb-4 z-50 bg-Bl border border-white dark:border-white/[0.2] text-gray-400 p-4 rounded-lg">
              <p className="font-bold text-white text-lg mb-2">
                Special Thanks To Our Copy Providers
              </p>
              <pre className="font-mono text-pretty text-md whitespace-pre-wrap">
                {`
  Name: Smarika Nepal,
  Provided us With: All notes of Class 10 Nepali
  `}
                <hr className=" border-gray-400 border-dashed" />
                {`
  Name: Anushka  Gautam,
  Provided us With: All notes of Class 9 Website Designing
`}{" "}
                <hr className="  border-gray-400 border-dashed" />
                {`
  Name: Brij kumar Singh,
  Provided us With: All notes of Class 11 & 12 Physics`}{" "}
                {/* <hr className="  border-gray-400 border-dashed" /> */}
              </pre>
            </div>
            {/* <CounterSection /> */}
          </div>
          <DeveloperNote />
          <HoverEffect
            items={currentCardGroup}
            onCardClick={handleCardClick}
            className={`my-custom-class fade-from-right ${
              showCards ? "grid" : "hidden"
            }`}
          />
          <div
            id="pdf"
            className={`hidden justify-center items-center my-16 rounded-4xl$
              showCards ? "flex" : "hidden"
            }`}
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
          /
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-6 mt-4"
        >
          <Input
            placeholder="Dev command"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-accent w-32 h-9 rounded-md">
            {showCards ? "Hide" : "Admin"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default MyPage;
