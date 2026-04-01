import React, { useState, useCallback, useRef } from "react";
import type { Project } from "../data/projects";

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function getLogoSources(url: string): string[] {
  try {
    const hostname = new URL(url).hostname;
    const domain = hostname.replace("www.", "");
    return [
      `https://img.logo.dev/${domain}?token=pk_a8V0NDJtTnOTUWYz8mYJIQ`,
      `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${hostname}&size=128`,
      `https://${hostname}/favicon.ico`,
    ];
  } catch {
    return [];
  }
}

const pastelColors = [
  "#E8F5E9", "#E3F2FD", "#FFF3E0", "#F3E5F5", "#E0F7FA",
  "#FBE9E7", "#F1F8E9", "#EDE7F6", "#E8EAF6", "#FCE4EC",
];

function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return pastelColors[Math.abs(hash) % pastelColors.length];
}

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const [showInitials, setShowInitials] = useState(false);
  const sourceIndex = useRef(0);
  const sources = getLogoSources(project.url);

  const handleError = useCallback(() => {
    sourceIndex.current += 1;
    if (sourceIndex.current < sources.length) {
      // Try next source — force re-render won't work with ref, so set src directly
      const img = document.querySelector(
        `[data-logo-key="${project.url}"]`
      ) as HTMLImageElement | null;
      if (img) {
        img.src = sources[sourceIndex.current];
      }
    } else {
      setShowInitials(true);
    }
  }, [sources, project.url]);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="card-logo-wrapper">
        {!showInitials && sources.length > 0 ? (
          <img
            data-logo-key={project.url}
            src={sources[0]}
            alt={`${project.name} logo`}
            className="card-logo"
            loading="lazy"
            onError={handleError}
          />
        ) : (
          <div
            className="card-initials"
            style={{ backgroundColor: getColor(project.name) }}
          >
            {getInitials(project.name)}
          </div>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{project.name}</h3>
        <span className="card-category">{project.category}</span>
        <p className="card-domain">{getDomain(project.url)}</p>
      </div>

      <div className="card-cta">
        <span className="cta-text">View Project</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cta-arrow">
          <path d="M3 8.5H12M12 8.5L8.5 5M12 8.5L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
};

export default React.memo(ProjectCard);
