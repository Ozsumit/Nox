"use client";
// import { useState, FormEvent } from "react";
import React, { useState, useEffect, FormEvent } from "react";

// import Hero from "@/components/Hero";
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
import GithubReadme from "@/components/ui/readme";
import DeveloperNote from "@/components/ui/readme";
// import React, { useState, useEffect } from "react";

// import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const MyPage = () => {
  const [currentIdentifier, setCurrentIdentifier] = useState<string>("default");
  const [isLoading, setIsLoading] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [visibleLessons, setVisibleLessons] = useState<string | null>(null);

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
      title: "Unit 1 C-10/DBMS",
      description: "Introduction to DBMS  Architecture",
      link: "#pdf",
    },
    {
      title: "Unit 2 C-10/DBMS",
      description: "Entity Relationship Modal",
      link: "#pdf",
    },
    {
      title: "Unit 3 C-10/DBMS",
      description: "Sequencial Query Language (SQL)",
      link: "#pdf",
    },
    {
      title: "Unit 4 C-10/DBMS ",
      description: "Database Design",
      link: "#pdf",
    },
    // ------------
    {
      title: "Unit 1 C-10/Nep",
      description: "Ujyalo Yatra",
      link: "#pdf",
    },
    {
      title: "Unit 2 C-10/Nep",
      description: "Ghar Jhagada",
      link: "#pdf",
    },
    {
      title: "Unit 3 C-10/Nep",
      description: "Chikitsa  bigyaan ra Aayurbed Chikitsa",
      link: "#pdf",
    },
    {
      title: "Unit 4 C-10/Nep ",
      description: "Yesto Kailyai Nahos",
      link: "#pdf",
    },
    {
      title: "Unit 5 C-10/Nep",
      description: "Laxmi Prasad Devkota",
      link: "#pdf",
    },
    {
      title: "Unit 6 C-10/Nep",
      description: "Adhikar Thulo ki Kartavya Thulo",
      link: "#pdf",
    },
    {
      title: "Unit 7 C-10/Nep",
      description: "Satru",
      link: "#pdf",
    },
    {
      title: "Unit 8 C-10/Nep",
      description: "Nepali Hamro Shram Ra Sip",
      link: "#pdf",
    },
    {
      title: "Unit 9 C-10/Nep ",
      description: "Mero Desh Ko Sikshya",
      link: "#pdf",
    },
    {
      title: "Unit 10 C-10/Nep",
      description: "Byabasahik Chithi",
      link: "#pdf",
    },
    {
      title: "Unit 11 C-10/Nep",
      description: "Kartabya",
      link: "#pdf",
    },
    {
      title: "Unit 12 C-10/Nep",
      description: "Pablo Picasso",
      link: "#pdf",
    },
    {
      title: "Unit 13 C-10/Nep",
      description: "Pakhnos!",
      link: "#pdf",
    },
    //
    {
      title: "Unit 1 C-10/OOP",
      description: "Introduction to Object Oriented Programming",
      link: "#pdf",
    },
    {
      title: "Unit 1 C-11/Java",
      description: "Java Fundamentals",
      link: "#pdf",
    },
    {
      title: "Unit 2 C-11/Java",
      description: "DataTypes and Variables",
      link: "#pdf",
    },
    {
      title: "Unit 3 C-11/Java",
      description: "Class And Objects",
      link: "#pdf",
    },
    {
      title: "Unit 4 C-11/Java ",
      description: "Control Statements",
      link: "#pdf",
    },
    {
      title: "Unit 1 C-11/OS",
      description: "Introduction to Operating System",
      link: "#pdf",
    },
    {
      title: "Unit 2 C-11/OS",
      description: "Process And Process Sheduling",
      link: "#pdf",
    },
    {
      title: "Unit 3 C-11/OS",
      description: "Deadlock Management",
      link: "#pdf",
    },
    {
      title: "Unit 4 C-11/OS ",
      description: "Memory Management and Paging",
      link: "#pdf",
    },
    {
      title: "Unit 1 C-11/WMAD",
      description: "Introduction to Mobile Application",
      link: "#pdf",
    },
  ];

  const checkKeywords = (value: string) => {
    const keywords = ["let there be light", "npm run dev", "git push"];
    return keywords.some((keyword) => value.toLowerCase().includes(keyword));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkKeywords(inputValue)) {
      setShowCards((prevState) => !prevState); // Toggle the state
    } else {
      setShowCards(false); // Hide cards if no keyword is present
    }
  };

  return (
    <main>
      <div className="h-screen rounded-md bg-black flex flex-col w-auto lg:px-28 sm:px-4 pt-2">
        <div className="hero flex justify-center flex-col lg:pt-16 sm:pt-0 w-auto sm:border-t-0 sm:border-t-white">
          <h2 className="relative flex-row justify-center items-center md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex  gap-2 sm:mx-4 md:gap-8">
            <span>Developers</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>Contributors</span>
          </h2>
          <ShootingStars />
          <StarsBackground className=" h-exxl" />
          <div className="devs flex flex-wrap gap-6  my-6 justify-between">
            <PersonCard
              name="Sumit Pokhrel"
              role="Developer"
              imageUrl="/images/sumit2.jpg"
              linkedin="https://www.linkedin.com/in/johndoe"
              Instagram="https://twitter.com/johndoe"
              github="https://github.com/johndoe"
              email="john@example.com"
            />
            <PersonCard
              name="Denisha Adhikari"
              role="Contributer: Nepali/Wmad/Os"
              imageUrl="/images/denisa.jpg"
              // imageUrl="https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/444457997_504318481923855_7156661299963435710_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJv9rPmHP1-c-CVEq8GyMGOrCuk2n2mDE6sK6TafaYMbfF9YKbMBXDdib7TJAusYrbcxMcNjbrVrpkUy_paX8L&_nc_ohc=WelJYflIYWoQ7kNvgGgDGR1&_nc_ht=scontent.fbdp2-1.fna&oh=00_AYAlQ0ChYCiFcAY6YcqsrpVuiyqLEjwUlWpqyzjFV_AKWg&oe=66C22E49"
              // linkedin="https://www.linkedin.com/in/johndoe"
              Instagram="https://twitter.com/johndoe"
              github="https://github.com/johndoe"
              email="john@example.com"
            />
            <PersonCard
              name="Diya Bhattarai"
              role="Developer: Bug Tester"
              imageUrl="/images/diya.jpg"
              // linkedin="https://www.linkedin.com/in/johndoe"
              Instagram="https://www.instagram.com/_diya_bhattarai_/"
              github="#"
              email="#"
            />
            <PersonCard
              name="Alish Gautam"
              role="Developer: Bug Tester"
              imageUrl="/images/alish.jpg"
              // linkedin="https://www.linkedin.com/in/johndoe"
              Instagram="https://www.instagram.com/alish_gautam11/"
              github="https://www.github.com/AZalish"
              email="alishgautam27@gmail.com"
            />
            <PersonCard
              name="Pratik Timsina"
              role="Contributer: Nepali/Wmad/Os"
              imageUrl="/images/pratik.png"
              // linkedin="https://www.linkedin.com/in/johndoe"
              Instagram="https://twitter.com/johndoe"
              github="https://github.com/johndoe"
              email="john@example.com"
            />
            <PersonCard
              name="Smarika Nepal"
              role="Contributer: Nepali/Wmad/Os"
              imageUrl="/images/female.png"
              // linkedin="https://www.linkedin.com/in/johndoe"
              Instagram="#"
              github="#"
              email="john@example.com"
            />
          </div>
          <DeveloperNote />

          <HoverEffect
            items={items}
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
      </div>
    </main>
  );
};

export default MyPage;
