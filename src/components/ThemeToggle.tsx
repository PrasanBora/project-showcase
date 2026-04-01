import React from "react";

interface Props {
  dark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<Props> = ({ dark, onToggle }) => (
  <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
    {dark ? (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 2V4M10 16V18M2 10H4M16 10H18M4.93 4.93L6.34 6.34M13.66 13.66L15.07 15.07M15.07 4.93L13.66 6.34M6.34 13.66L4.93 15.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.39 11.39A7.5 7.5 0 118.61 2.61a5.5 5.5 0 008.78 8.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  </button>
);

export default React.memo(ThemeToggle);
