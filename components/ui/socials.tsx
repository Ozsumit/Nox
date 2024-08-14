// components/CompanyInfo.tsx
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "../styles/socials.module.css";
import { cn } from "@/lib/utils";

const CompanyInfo: React.FC = () => {
  return (
    <div
      className={cn(
        " bg-black border border-white dark:border-white/[0.2]",
        styles.companyInfo
      )}
    >
      <h2>Vass.inc</h2>
      <p>Buddhashanti-2, Jhapa</p>
      <a href="mailto:">Email: pokhrelsumit36@gmail.com</a>
      <p></p>
      <a href="tel:9842134149">Phone: 9842134149</a>

      <div className={styles.socialLinks}>
        <a
          href="https://www.facebook.com/Ozsumit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://sumit.info.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image
                priority
                width={10}
                height={10}
                src="https://sumit.info.np/brandicon.svg"
                alt="Follow us on Twitter"
                className="mb-4 "
              />
        </a>
        <a
          href="https://github.com/ozsumit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="##" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/sumitp0khrel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
