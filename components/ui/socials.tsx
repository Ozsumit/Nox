import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "../styles/socials.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SearchEngine from "./searchEngine";

const CompanyInfo: React.FC = () => {
  return (
    <div
      className={cn(
        "bg-black border border-white dark:border-white/[0.2] p-6 rounded-lg",
        styles.companyInfo
      )}
    >
      {/* Company Logo and Name */}
      <div className="flex flex-row gap-2   items-center mb-4">
        <Link
          className="Image flex flex-row  items-center 
        "
          href="https://sumit.info.np/"
        >
          <Image
            src="./images/brandicon.svg"
            alt="lpgp"
            height={60}
            width={60}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <h2 className="text-2xl font-bold text-white">Vass.inc</h2>
        </Link>
      </div>

      {/* Company Address */}
      <p className="text-gray-400 mb-2">Buddhashanti-2, Jhapa</p>

      {/* Contact Details */}
      <a
        href="mailto:pokhrelsumit36@gmail.com"
        className="text-gray-400 mb-2 block hover:underline"
      >
        Email: pokhrelsumit36@gmail.com
      </a>
      <a
        href="tel:9842134149"
        className="text-gray-400 mb-6 block hover:underline"
      >
        Phone: 9842134149
      </a>

      {/* Social Media Links */}
      <div className={styles.socialLinks + " flex space-x-4"}>
        <a
          href="https://www.facebook.com/Ozsumit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/ozsumit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="##"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/sumitp0khrel/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
