import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { FaExpand } from "react-icons/fa";

interface ResultViewerProps {
  result: {
    description: string;
    url: string;
  };
  iframeRef?: React.RefObject<HTMLIFrameElement>; // Accept the ref as a prop
}

const ResultViewer: React.FC<ResultViewerProps> = ({ result, iframeRef }) => {
  const localIframeRef = useRef<HTMLIFrameElement | null>(null); // Local ref if no ref is passed
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const requestFullScreen = () => {
    const iframe = iframeRef?.current || localIframeRef.current;
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

  useEffect(() => {
    const iframe = iframeRef?.current || localIframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      return () => {
        iframe.removeEventListener("load", handleIframeLoad);
      };
    }
  }, [iframeRef]);

  return (
    <div className="mt-4 w-auto flex flex-col items-center relative">
      <h2 className="text-xl font-bold mb-2">{result.description}</h2>
      <iframe
        ref={iframeRef || localIframeRef} // Use the passed ref or the local one
        title={result.description}
        className="rounded-lg"
        src={result.url}
        width="540"
        height="680"
        allowFullScreen
      ></iframe>
      {iframeLoaded && (
        <button
          title="Fullscreen"
          onClick={requestFullScreen}
          className="absolute top-12 right-4 w-14 h-14 flex justify-center items-center bg-slate-950 text-white rounded"
        >
          <FaExpand />
        </button>
      )}
    </div>
  );
};

export default ResultViewer;
