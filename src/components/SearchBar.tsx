import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <div className="search-bar">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="search-icon">
      <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
    <input
      type="text"
      placeholder="Search projects..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
    {value && (
      <button className="search-clear" onClick={() => onChange("")} aria-label="Clear search">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    )}
  </div>
);

export default React.memo(SearchBar);
