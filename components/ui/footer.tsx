import React from "react";
import Link from "next/link";

interface Item {
  title: string;
  description: string;
  link: string;
}

interface FooterProps {
  items: Item[];
}

const Footer: React.FC<FooterProps> = ({ items }) => {
  return (
    <footer className="w-[97vw] lg:w-full py-6 bg-black backdrop:blur-md z-50 font-mono border border-white dark:border-white/[0.2] text-gray-400 p-4 rounded-lg justify-center flex flex-col items-center">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">
          Explore a Universe of Knowledge with The Repo × Twilight
        </h3>
        <p className="text-sm">
          Discover comprehensive study resources, from Class 9 to 12 materials,
          question papers, and unique downloadable content. Join us on a journey
          through a cosmos of learning.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            className="hover:text-green-400 text-center"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-4 text-xs">
        &copy; {new Date().getFullYear()} The Repo × Twilight. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
