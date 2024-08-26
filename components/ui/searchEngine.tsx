"use client";

import React, { useState, useEffect, useRef } from "react";
import { urlMappings } from "../URLS/urlMappings";
import ResultViewer from "./UrlViewer";

interface SearchResult {
  description: string;
  url: string;
  Grade: string;
  subject?: string;
}

const SearchEngine: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
    null
  );
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const keywords = searchTerm.toLowerCase().split(/\s+/);

      const results = Object.entries(urlMappings)
        .map(([description, data]) => ({
          description,
          url: data.url,
          Grade: data.Grade,
          subject: data.subject,
        }))
        .filter((result) => {
          const fieldsToCheck = [
            result.description.toLowerCase(),
            result.Grade?.toLowerCase() || "",
            result.subject?.toLowerCase() || "",
          ];

          return keywords.every((keyword) =>
            fieldsToCheck.some((field) => field.includes(keyword))
          );
        });

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = (result: SearchResult) => {
    setSelectedResult(result);
    // Scroll to the iframe when a result is selected
    if (iframeRef.current) {
      iframeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-4xl z-50 mx-auto p-4 flex flex-col justify-center items-center">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Quickly find the file you are looking for"
          className="z-50 w-128 h-12 text-white rounded-md border border-white dark:border-white/[0.2] border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        <div className="mt-4">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="mb-2 bg-black border border-white dark:border-white/[0.2] group-hover:border-slate-700 p-[2%] justify-center items-center flex flex-col rounded"
            >
              <button
                onClick={() => handleResultClick(result)}
                className="text-gray-500 hover:text-white z-50 flex flex-col justify-center items-center"
              >
                <span>{result.description}</span>
                <span className="text-sm text-gray-400">
                  {result.Grade && `Class ${result.Grade}`}
                  {result.subject && ` - ${result.subject}`}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedResult && (
        <ResultViewer
          result={selectedResult}
          iframeRef={iframeRef} // Pass the ref to the ResultViewer component
        />
      )}
    </div>
  );
};

export default SearchEngine;
