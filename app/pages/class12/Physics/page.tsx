"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect, useCallback } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Iframe from "@/components/ui/iframe";
import Link from "next/link";
import { X } from "lucide-react";

import { toast, Toaster } from "sonner";

import { Breadcrumb } from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
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
      title: "Electricity & Magnetism",
      description: "Magnetic Properties of Materials",
      link: "#pdf",
    },
    {
      title: "Electricity & Magnetism ",
      description: "Alternating Current",
      link: "#pdf",
    },
    {
      title: "Heat & Thermodynamics",
      description: "2nd Law of Thermodynamics",
      link: "#pdf",
    },
    {
      title: "Mechanics",
      description: "Rotational Dynamics",
      link: "#pdf",
    },
    {
      title: "Mechanics",
      description: "Fluid Dynamics",
      link: "#pdf",
    },
    {
      title: "Wave Nature of light",
      description: "Nature and Propagation of Light",
      link: "#pdf",
    },
    {
      title: "Wave Nature of light",
      description: "Diffraction (Proves wave nature of Light )",
      link: "#pdf",
    },
    {
      title: "Wave Nature of light",
      description: "Interference of light",
      link: "#pdf",
    },
    {
      title: "Modern Physics",
      description: "Electrons and protons",
      link: "#pdf",
    },
    {
      title: "Modern Physics",
      description: "Energy",
      link: "#pdf",
    },
    {
      title: "Modern Physics",
      description: "Particle Physics & Cosmology",
      link: "#pdf",
    },
    {
      title: "Modern Physics",
      description: "Quantization",
      link: "#pdf",
    },
    {
      title: "Modern Physics",
      description: "Semiconductor Devices",
      link: "#pdf",
    },
    {
      title: "MCQs For Waves, Motion and Mechanics",
      description: "MCQs",
      link: "#pdf",
    },
  ];
  const pagination = [
    { label: "Home", href: "/" },
    { label: "Class 12", href: "/class12/" },
    { label: "Physics", href: "/app/pages/class12/Physics" },
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
        <Footer items={lessons} />
      </div>
    </main>
  );
};

export default MyPage;
