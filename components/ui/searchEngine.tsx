"use client";

import React, { useState, useEffect, useRef } from "react";
import { urlMappings } from "../URLS/urlMappings";
import ResultViewer from "./UrlViewer";
import Fuse from "fuse.js";

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

  const fuseRef = useRef<Fuse<SearchResult> | null>(null);

  useEffect(() => {
    const searchData = Object.entries(urlMappings).map(
      ([description, data]) => ({
        description,
        url: data.url,
        Grade: data.Grade,
        subject: data.subject,
      })
    );

    const fuseOptions = {
      keys: [
        { name: "description", weight: 0.7 },
        { name: "Grade", weight: 0.2 },
        { name: "subject", weight: 0.1 },
      ],
      includeScore: true,
      threshold: 0.4,
      ignoreLocation: true,
      useExtendedSearch: true,
    };

    fuseRef.current = new Fuse(searchData, fuseOptions);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1 && fuseRef.current) {
      const formattedSearch = searchTerm
        .split(" ")
        .map((term) => `'${term}`)
        .join(" | ");

      const results = fuseRef.current.search(formattedSearch);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = (result: SearchResult) => {
    setSelectedResult(result);
    if (iframeRef.current) {
      iframeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="z-50 mx-auto w-[95vw] lg:w-auto p-4 flex flex-col justify-center items-center">
      <div className="mb-4 w-10/12 lg:w-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Find any file in a whim"
          className="w-full lg:w-144 h-12 text-white bg-black rounded-md border border-white/20 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-50 focus:border-transparent transition duration-200 ease-in-out"
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
        <ResultViewer result={selectedResult} iframeRef={iframeRef} />
      )}
    </div>
  );
};

export default SearchEngine;
