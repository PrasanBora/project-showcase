"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, X, ChevronDown } from "lucide-react";

const CATEGORIES = ["All", "Website", "CRM / Dashboard", "Platform", "Mobile"];
const INDUSTRIES = [
  "All Industries",
  "Healthcare",
  "Legal",
  "Finance",
  "SaaS",
  "Food & Beverage",
  "Real Estate",
  "Education",
  "Other"
];

type FilterBarProps = {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  activeIndustry: string;
  setActiveIndustry: (i: string) => void;
  resultCount: number;
};

export function FilterBar({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeIndustry,
  setActiveIndustry,
  resultCount,
}: FilterBarProps) {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 150);
    return () => clearTimeout(handler);
  }, [inputValue, setSearchQuery]);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className="sticky top-[64px] z-40 bg-white/95 backdrop-blur border-b border-border py-4 mb-12"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row gap-5 xl:items-center justify-between">
        
        {/* Left Side: Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar pb-1 xl:pb-0 -mx-6 px-6 xl:mx-0 xl:px-0">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-text-secondary hover:bg-tag-bg"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between xl:justify-end">
          <div className="text-xs font-semibold text-text-muted mt-2 sm:mt-0 xl:hidden">
            Showing {resultCount} project{resultCount !== 1 ? 's' : ''}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto">
            {/* Industry Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="appearance-none w-full sm:w-[200px] px-4 py-2.5 bg-white border border-border rounded-xl text-sm font-medium text-text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent cursor-pointer pr-10 shadow-sm transition-shadow hover:shadow-md"
              >
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search projects..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-border rounded-xl text-sm font-medium text-text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent shadow-sm transition-shadow hover:shadow-md placeholder:text-text-muted"
              />
              {inputValue && (
                <button
                  onClick={() => setInputValue("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary cursor-pointer p-1 rounded-full hover:bg-surface"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            
            {/* Result count desktop view */}
            <div className="hidden xl:block text-xs font-semibold text-text-muted min-w-[130px] text-right">
              Showing {resultCount} project{resultCount !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
