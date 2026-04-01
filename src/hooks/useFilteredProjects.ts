import { useMemo } from "react";
import { Project, projects } from "../data/projects";

type UseFilteredProjectsProps = {
  searchQuery: string;
  activeCategory: string;
};

export function useFilteredProjects({
  searchQuery,
  activeCategory,
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

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);
}
