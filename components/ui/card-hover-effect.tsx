"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Iframe from "./iframe";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [items]); // Re-run effect when items change

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    }),
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {!isLoading &&
          items.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Link
                href={item.link}
                className="relative group block p-2 h-full w-full cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onCardClick && onCardClick(item.description)}
                download={item.download}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 scale-[1.01] h-full w-full bg-gray-600 dark:bg-slate-900/[0.9] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.3, delay: 0.4 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  className="rounded-2xl h-44 min-w-54 max-w-120 w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              </Link>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default HoverEffect;
