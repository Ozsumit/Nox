"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Iframe from "./iframe";
import styles from "../styles/CardAnimation.module.css";

export const HoverEffect = ({
  items,
  className,
  onCardClick,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    download?: boolean;
  }[];
  className?: string;
  onCardClick?: (description: string) => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.title}
          className={cn(
            "relative group block p-2 h-full w-full cursor-pointer ",
            animated && styles.fadeFromRight
          )}
          style={{ animationDelay: `${idx * 200}ms` }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onCardClick && onCardClick(item.description)}
          download={item.download}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-600 dark:bg-slate-900/[0.9] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-44 min-w-54 max-w-120 w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <div className="relative z-48">
              <div className="p-4">
                <h4 className="text-zinc-100 font-bold tracking-wide mt-0 text-xl">
                  {item.title}
                </h4>
                <p className="mt-5 text-zinc-400 tracking-wide leading-relaxed text-md">
                  {item.description}
                </p>
              </div>
              <Iframe identifier={item.link} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
