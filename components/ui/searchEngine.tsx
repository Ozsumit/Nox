"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { urlMappings } from "../URLS/urlMappings";
import ResultViewer from "./UrlViewer";
import Fuse from "fuse.js";
import { Search, ChevronDown, ChevronUp, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResult {
  description: string;
  url: string;
  Grade: string;
  subject?: string;
}

const EnhancedSearchEngine: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
    null
  );
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFullResults, setShowFullResults] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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

    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1 && fuseRef.current) {
      const formattedSearch = searchTerm
        .split(" ")
        .map((term) => `'${term}`)
        .join(" | ");

      const results = fuseRef.current.search(formattedSearch);
      setSearchResults(results.map((result) => result.item));
      setShowSuggestions(true);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
    setShowFullResults(false);
    setHighlightedIndex(-1);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = useCallback((result: SearchResult) => {
    setSelectedResult(result);
    setSearchTerm(result.description);
    setShowSuggestions(false);
    setShowFullResults(false);
    if (iframeRef.current) {
      iframeRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setSearchHistory((prevHistory) => {
      const newHistory = [
        result.description,
        ...prevHistory.filter((item) => item !== result.description),
      ].slice(0, 5);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      return newHistory;
    });

    // Close the search
    setShowSuggestions(false);
    setShowFullResults(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  const toggleFullResults = () => {
    setShowFullResults(!showFullResults);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, searchResults.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (e.key === "Enter" && highlightedIndex !== -1) {
      e.preventDefault();
      handleResultClick(searchResults[highlightedIndex]);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setShowSuggestions(false);
    setShowFullResults(false);
    inputRef.current?.focus();
  };

  return (
    <div className="z-50 mx-auto w-[95vw] lg:w-auto p-4 flex flex-col justify-center items-center">
      <div className="mb-4 w-10/12 lg:w-auto relative">
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Quickly find any file in a jiffy"
            className="w-full lg:w-144 h-12 text-white bg-black rounded-md border border-white/20 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-50 focus:border-transparent transition duration-200 ease-in-out"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <Search size={20} />
          </button>
        </form>
        <AnimatePresence>
          {showSuggestions && searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute w-full mt-1 bg-black border border-white/20 rounded-md shadow-lg z-10"
            >
              {searchResults.slice(0, 5).map((result, index) => (
                <div
                  key={index}
                  className={`p-2 hover:bg-gray-800 cursor-pointer ${
                    index === highlightedIndex ? "bg-gray-800" : ""
                  }`}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="text-white">{result.description}</div>
                  <div className="text-sm text-gray-400">
                    {result.Grade && `Class ${result.Grade}`}
                    {result.subject && ` - ${result.subject}`}
                  </div>
                </div>
              ))}
              {searchResults.length > 5 && (
                <button
                  onClick={toggleFullResults}
                  className="w-full p-2 text-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-150 ease-in-out"
                >
                  View Full Results{" "}
                  {showFullResults ? (
                    <ChevronUp size={16} className="inline" />
                  ) : (
                    <ChevronDown size={16} className="inline" />
                  )}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showFullResults && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 bg-black border border-white/20 rounded-md shadow-lg"
            >
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-2 hover:bg-gray-800 cursor-pointer ${
                    index === highlightedIndex ? "bg-gray-800" : ""
                  }`}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="text-white">{result.description}</div>
                  <div className="text-sm text-gray-400">
                    {result.Grade && `Class ${result.Grade}`}
                    {result.subject && ` - ${result.subject}`}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {searchHistory.length > 0 && !showSuggestions && !showFullResults && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 bg-black border border-white/20 rounded-md shadow-lg"
            >
              <div className="p-2 text-gray-400">Recent Searches</div>
              {searchHistory.map((item, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-800 cursor-pointer flex items-center"
                  onClick={() => setSearchTerm(item)}
                >
                  <Clock size={16} className="mr-2 text-gray-400" />
                  <div className="text-white">{item}</div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {selectedResult && (
        <ResultViewer result={selectedResult} iframeRef={iframeRef} />
      )}
    </div>
  );
};

export default EnhancedSearchEngine;
