"use client";

import { motion } from "motion/react";
import { SearchX } from "lucide-react";

type EmptyStateProps = {
  onClear: () => void;
};

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-24 px-6 text-center w-full"
    >
      <div className="w-20 h-20 bg-surface border border-border rounded-full flex items-center justify-center mb-6">
        <SearchX className="w-8 h-8 text-text-muted" />
      </div>
      <h3 className="text-2xl font-sans font-semibold text-text-primary mb-2 tracking-tight">
        No projects found
      </h3>
      <p className="text-text-muted mb-8 max-w-sm">
        Try adjusting your filters or search term to see more results.
      </p>
      <button
        onClick={onClear}
        className="px-6 py-2.5 bg-accent text-white font-medium rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
      >
        Clear filters
      </button>
    </motion.div>
  );
}
