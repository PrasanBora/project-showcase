import { useMemo } from "react";
import { Project, projects } from "../data/projects";

type UseFilteredProjectsProps = {
  searchQuery: string;
  activeCategory: string;
  activeIndustry: string;
};

export function useFilteredProjects({
  searchQuery,
  activeCategory,
  activeIndustry,
}: UseFilteredProjectsProps): Project[] {
  return useMemo(() => {
    return projects.filter((project) => {
      const query = searchQuery.toLowerCase().trim();
      
      const matchesSearch =
        query === "" ||
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesIndustry =
        activeIndustry === "All Industries" || project.industry === activeIndustry;

      return matchesSearch && matchesCategory && matchesIndustry;
    });
  }, [searchQuery, activeCategory, activeIndustry]);
}
