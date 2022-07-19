import React, { useState } from "react";

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

const ProjectFilter = () => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((filter) => (
          <button key={filter}>{filter}</button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;