"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "../data/projects";

function getInitials(name: string) {
  return name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
}

function getDeterministicGradient(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash) % 360;
  const h2 = (h1 + 40) % 360;
  return `linear-gradient(135deg, hsl(${h1}, 45%, 55%), hsl(${h2}, 50%, 45%))`;
}

const categoryColors: Record<string, string> = {
  Business: "bg-blue-50 text-blue-700 border-blue-200",
  Legal: "bg-amber-50 text-amber-700 border-amber-200",
  Lifestyle: "bg-pink-50 text-pink-700 border-pink-200",
  SaaS: "bg-violet-50 text-violet-700 border-violet-200",
  Healthcare: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Education: "bg-cyan-50 text-cyan-700 border-cyan-200",
  "E-Commerce": "bg-orange-50 text-orange-700 border-orange-200",
  "Mobile App": "bg-rose-50 text-rose-700 border-rose-200",
  Media: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = getDeterministicGradient(project.name);
  const initials = getInitials(project.name);
  const catColor = categoryColors[project.category] || "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        layout: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.4, delay: index * 0.04 },
        y: { duration: 0.4, delay: index * 0.04 },
      }}
      whileHover="hover"
      className="group block"
    >
      <motion.div
        variants={{
          hover: { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full flex flex-col rounded-2xl bg-white border border-border overflow-hidden"
      >
        {/* Gradient Header with Initials */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <motion.div
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ background: gradient }}
            className="w-full h-full flex items-center justify-center"
          >
            <span className="text-white/90 font-bold text-5xl sm:text-6xl tracking-wider drop-shadow-sm select-none">
              {initials}
            </span>
          </motion.div>

          {/* Floating external link icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            variants={{ hover: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
          >
            <ExternalLink className="w-4 h-4 text-gray-700" />
          </motion.div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${catColor}`}>
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-sans font-bold text-xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-text-muted line-clamp-2 mb-5 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md text-[10px] font-mono uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-sm font-semibold text-accent mt-auto pt-4 border-t border-gray-100">
            <span>Visit Project</span>
            <motion.div
              variants={{ hover: { x: 4, y: -2 } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="ml-1.5"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}
