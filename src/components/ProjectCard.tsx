"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "../data/projects";

function getInitials(name: string) {
  return name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
}

function getDeterministicColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 25%, 65%)`;
}

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const fallbackColor = getDeterministicColor(project.name);
  const initials = getInitials(project.name);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        layout: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.3, delay: index * 0.07 },
        y: { duration: 0.3, delay: index * 0.07 }
      }}
      whileHover="hover"
      className="group block"
    >
      <motion.div
        variants={{
          hover: { y: -6, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="h-full flex flex-col rounded-2xl bg-white border border-border overflow-hidden"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-surface border-b border-border">
          {project.image ? (
            <motion.div
              variants={{ hover: { scale: 1.03 } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <Image 
                src={project.image} 
                alt={project.name} 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.div 
              variants={{ hover: { scale: 1.03 } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ backgroundColor: fallbackColor }}
              className="w-full h-full flex items-center justify-center text-white/90 font-serif text-5xl"
            >
              {initials}
            </motion.div>
          )}
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-4 py-1.5 bg-tag-bg text-tag-text rounded-full text-[11px] font-mono uppercase tracking-wider">
              {project.industry}
            </span>
            <span className="px-4 py-1.5 bg-tag-bg text-tag-text rounded-full text-[11px] font-mono uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          
          <h3 className="font-sans font-semibold text-2xl text-text-primary mb-3">
            {project.name}
          </h3>
          <p className="text-[15px] leading-relaxed text-text-muted line-clamp-2 mb-8 flex-grow">
            {project.description}
          </p>
          
          <div className="flex items-center text-sm font-medium text-text-primary mt-auto">
            <span>Visit Site</span>
            <motion.div
              variants={{ hover: { x: 4 } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}
