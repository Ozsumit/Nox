"use client";
import React, { useState } from "react";
import { QrCode } from "lucide-react";
import Image from "next/image";

const DonatePage = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col w-auto px-4 lg:px-28 pt-2">
      <div className="flex justify-center flex-col lg:pt-16 sm:pt-0 w-auto">
        <h2 className="text-3xl md:text-5xl text-center font-medium mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-white">
            Support
          </span>
          <span className="text-white text-lg font-thin mx-2">x</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-white">
            Our Cause
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="w-full backdrop-blur-md mb-4 border border-white/20 p-6 rounded-lg">
            <p className="font-bold text-white text-lg mb-4">
              Admin needs urgent help
            </p>
            <pre className="whitespace-pre-wrap">
              <p className="text-pretty">
                {`Hey there, wonderful visitors! My trusty laptop decided to take an early retirement,
and now I'm in a bit of trouble. Since I can't afford a new one, I'm reaching out 
to you for a bit of help. If you've enjoyed your time here or appreciate the work I've
put into this site, consider tossing a coin (or a few!) my way to help me get back on 
my digital feet. Even a small donation could go a long way, or if you have any spare
laptop, I'd be eternally grateful! Thanks for being awesome, and for any help you can
provide! 🌟. By the way this is how im hosting right now`}
              </p>
              <button
                onClick={() => setShowQR(!showQR)}
                className="bg-orange-400 hover:bg-accent/80 mt-4 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <QrCode className="mr-2" />
                Donate with QR Code
              </button>
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "/images/cooked1.jpg",
              "/images/cooked2.jpg",
              "/images/cooked3.jpg",
            ].map((src, index) => (
              <div key={index} className="relative w-full h-[300px]">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg"; // Fallback image
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8"></div>

        {showQR && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg items-center  justify-center flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Scan to Donate
              </h2>
              <Image
                src="/images/qr.jpg"
                alt="QR Code"
                width={200}
                height={150}
                objectFit="cover"
                className="mx-auto"
              />
              <button
                onClick={() => setShowQR(false)}
                className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              >
                Close
              </button>
              {` Or call me on 9842134149 Email: Pokhrelsumit36@gmail.com
        `}{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonatePage;
