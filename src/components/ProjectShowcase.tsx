"use client";

import { useState } from "react";
import { FilterBar } from "./FilterBar";
import { ProjectGrid } from "./ProjectGrid";
import { useFilteredProjects } from "../hooks/useFilteredProjects";

export function ProjectShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useFilteredProjects({
    searchQuery,
    activeCategory,
  });

  const handleClearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <>
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        resultCount={filteredProjects.length}
      />
      <ProjectGrid
        projects={filteredProjects}
        onClearFilters={handleClearFilters}
      />
    </>
  );
}
