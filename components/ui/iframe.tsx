import React, { useEffect, useRef, useState } from "react";
import { urlMappings } from "../URLS/urlMappings";
import { FaExpand } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

interface IframeProps {
  identifier: string;
}

const Iframe: React.FC<IframeProps> = ({ identifier }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
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

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      return () => {
        iframe.removeEventListener("load", handleIframeLoad);
      };
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const source = urlMappings[identifier]?.url || "";

  return (
    <div className="relative">
      <iframe
        ref={iframeRef}
        id={identifier}
        className="rounded-lg z-5"
        src={source}
        width="540"
        height="680"
        title={identifier}
      ></iframe>
      {iframeLoaded && (
        <div>
          <button
            title="Fullscreen"
            onClick={requestFullScreen}
            className="absolute top-4 w-14 h-14 flex justify-center items-center right-2 px-4 py-2 bg-slate-950 text-white rounded"
          >
            <FaExpand />
          </button>
          <button
            title="Back to Top"
            onClick={scrollToTop}
            className="  fixed right-4 w-12 h-12 flex justify-center items-center bg-transparent border border-white text-white rounded-full shadow-lg"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default Iframe;
