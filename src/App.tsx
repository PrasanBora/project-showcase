import React, { useState, useMemo } from "react";
import { projects, categories } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ThemeToggle from "./components/ThemeToggle";
import { useDarkMode } from "./hooks/useDarkMode";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [dark, toggleDark] = useDarkMode();

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.url.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <img
              src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.zarleinfotech.com&size=128"
              alt="Zarle Infotech"
              className="header-logo"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div>
              <h1 className="header-title">Zarle Infotech</h1>
              <p className="header-subtitle">Project Showcase</p>
            </div>
          </div>
          <div className="header-right">
            <ThemeToggle dark={dark} onToggle={toggleDark} />
          </div>
        </div>
      </header>

      <main className="main">
        <div className="controls">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter categories={categories} active={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="project-grid">
            {filtered.map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Zarle Infotech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
