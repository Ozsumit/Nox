import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

interface PersonCardProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  Instagram?: string;
  github?: string;
  email?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  role,
  imageUrl,
  linkedin,
  Instagram,
  github,
  email,
}) => {
  return (
    <div className="text-white bg-black shadow-lg border border-white dark:border-white/[0.2]  rounded-lg overflow-hidden w-72 mx-0 z-50">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          onError={(e) => {
            console.error(`Error loading image for ${name}:`, e);
            // Optionally set a fallback image
            // e.target.src = '/path/to/fallback-image.jpg';
          }}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl text-white font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{role}</p>
        <div className="flex justify-center space-x-4">
          {Instagram && (
            <a
              href={Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slate-500"
            >
              <FaInstagram size={24} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slate-500"
            >
              <FaGithub size={24} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-red-500 hover:text-red-700"
            >
              <FaEnvelope size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
