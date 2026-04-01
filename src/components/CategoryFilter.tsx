import React from "react";

interface Props {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

const CategoryFilter: React.FC<Props> = ({ categories, active, onChange }) => (
  <div className="category-filter">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`category-pill ${active === cat ? "active" : ""}`}
        onClick={() => onChange(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default React.memo(CategoryFilter);
