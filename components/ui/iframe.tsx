// components/ui/iframe.tsx
import React from "react";
import { urlMappings } from "../URLS/urlMappings";

interface IframeProps {
  identifier: string;
}

const Iframe: React.FC<IframeProps> = ({ identifier }) => {
  const source = urlMappings[identifier] || "";

  return (
    <iframe
      className="rounded-lg z-1"
      src={source}
      width="540"
      height="680"
    ></iframe>
  );
};

export default Iframe;
