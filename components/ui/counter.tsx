import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  duration: number;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration,
  label,
}) => {
  const [count, setCount] = useState<number>(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animateCounter();
          animatedRef.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    const timer = setInterval(() => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
      } else {
        setCount(target);
        clearInterval(timer);
      }
    }, 16);
  };

  return (
    <div ref={counterRef} className="text-gray-400">
      <div className="text-4xl font-bold mb-2">{count}</div>
      <div className="text-lg">{label}</div>
    </div>
  );
};

const CounterSection: React.FC = () => {
  return (
    <div className=" text-gray-400 p-8 rounded-lg relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-400 rounded-full"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="sm:w-11/12 lg:w-80 backdrop:blur-md mb-4 z-50 bg-Bl border border-white dark:border-white/[0.2] text-gray-400 p-4 rounded-lg">
        <h2 className="font-bold text-white text-lg mb-2">Our Statistics</h2>
        <div className="flex justify-start items-start flex-col font-mono p-4 text-gray-400">
          <AnimatedCounter
            target={650}
            duration={1500}
            label="Viewers everyday"
          />
          <AnimatedCounter target={4500} duration={1500} label="Visitors" />
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
