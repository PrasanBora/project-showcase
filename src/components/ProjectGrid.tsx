"use client";

import { motion, AnimatePresence } from "motion/react";
import { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { EmptyState } from "./EmptyState";

type ProjectGridProps = {
  projects: Project[];
  onClearFilters: () => void;
};

export function ProjectGrid({ projects, onClearFilters }: ProjectGridProps) {
  return (
    <section className="px-6 sm:px-12 lg:px-24 mb-32 max-w-[1440px] mx-auto min-h-[400px]">
      <AnimatePresence mode="popLayout" initial={false}>
        {projects.length > 0 ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <EmptyState key="empty" onClear={onClearFilters} />
        )}
      </AnimatePresence>
    </section>
  );
}
