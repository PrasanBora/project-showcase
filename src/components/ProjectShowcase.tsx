"use client";

import { useState } from "react";
import { FilterBar } from "./FilterBar";
import { ProjectGrid } from "./ProjectGrid";
import { useFilteredProjects } from "../hooks/useFilteredProjects";

export function ProjectShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All Industries");

  const filteredProjects = useFilteredProjects({
    searchQuery,
    activeCategory,
    activeIndustry,
  });

  const handleClearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setActiveIndustry("All Industries");
  };

  return (
    <>
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeIndustry={activeIndustry}
        setActiveIndustry={setActiveIndustry}
        resultCount={filteredProjects.length}
      />
      <ProjectGrid 
        projects={filteredProjects} 
        onClearFilters={handleClearFilters}
      />
    </>
  );
}
