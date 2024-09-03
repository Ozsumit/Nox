import React, { useEffect, useRef, useState } from "react";
import { urlMappings } from "../URLS/urlMappings";
import { FaExpand } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

interface IframeProps {
  identifier: string;
}

const Iframe: React.FC<IframeProps> = ({ identifier }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const requestFullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const requestMethod =
        iframe.requestFullscreen ||
        (iframe as HTMLIFrameElement & { webkitRequestFullscreen?: () => void })
          .webkitRequestFullscreen ||
        (iframe as HTMLIFrameElement & { mozRequestFullScreen?: () => void })
          .mozRequestFullScreen ||
        (iframe as HTMLIFrameElement & { msRequestFullscreen?: () => void })
          .msRequestFullscreen;

      if (requestMethod) {
        requestMethod.call(iframe);
      } else {
        console.error("Fullscreen API is not supported");
      }
    } else {
      console.error("Iframe element not found");
    }
  };

  const handleScroll = () => {
    if (iframeRef.current) {
      const iframeRect = iframeRef.current.getBoundingClientRect();
      if (iframeRect.top < 0 && iframeRect.bottom > 0) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const source = urlMappings[identifier]?.url || "";

  if (!source) {
    return null; // Don't render anything if there's no source
  }

  return (
    <div className="relative">
      <iframe
        ref={iframeRef}
        id={identifier}
        className=" lg:mx-0 mx-2 max-w-[90vw] rounded-lg z-5"
        src={source}
        width="540"
        height="680"
        title={identifier}
      ></iframe>
      <button
        title="Fullscreen"
        onClick={requestFullScreen}
        className="absolute top-4 right-2 w-14 h-14 flex justify-center items-center bg-slate-950 text-white rounded"
      >
        <FaExpand />
      </button>
      {showBackToTop && (
        <button
          title="Back to Top"
          onClick={scrollToTop}
          className="absolute bottom-4 right-2 w-14 h-14 flex justify-center items-center bg-slate-950 border border-white text-white rounded-full shadow-lg"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Iframe;
