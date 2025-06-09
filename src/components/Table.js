import "./Table.css";
import React, { useState } from 'react';
import Row from "./Row";
import Header from "./Header";
import Modal from "./Modal";
import { categoryColors, types, projects } from "../data";

function Table() {
  
  // For tabs
  const [tab, setTab] = useState("all");

  // For multi-tag filters
  const [filters, setFilters] = useState([]);

  const handleTabClick = (newTab) => {
    setTab(newTab);
    setFilters([]); // reset filters on tab switch
  };

  // For modal
  const [selectedProject, setSelectedProject] = useState(null);

  const handleRowClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Filtering logic
  const filteredProjects = projects.filter((proj) => {
    if (tab === "all") return true;
    if (tab === "category" && filters.length > 0) {
      return filters.includes(proj.category);
    }
    if (tab === "type" && filters.length > 0) {
      return filters.includes(proj.type);
    }
    return true;
  });

  const categories = [...new Set(projects.map((p) => p.category))];
  const types = [...new Set(projects.map((p) => p.type))];


  return (
    <div className="table_container">
      <div className="tabs_container">
        <div className="tabs">
          <button className={tab === "all" ? "active" : ""} onClick={() => handleTabClick("all")}>All Projects</button>
          <button className={tab === "category" ? "active" : ""} onClick={() => handleTabClick("category")}>By Category</button>
          <button className={tab === "type" ? "active" : ""} onClick={() => handleTabClick("type")}>By Project Type</button>
        </div>
      </div>

      {(tab === "category" || tab === "type") && (
        <div className="filters">
          {(tab === "category" ? categories : types).map((item, idx) => {
            const isActive = filters.includes(item);
            const color = tab === "category" ? categoryColors[item] || "#ddd" : "#ddd";
            const bgColor = isActive ? color : "#fff";
            const textColor = isActive ? "#000" : "#333";
            const borderColor = isActive ? color : "#ccc";

            return (
              <button
                key={idx}
                className="color-tag"
                style={{
                  backgroundColor: bgColor,
                  color: textColor,
                  borderColor: borderColor,
                }}
                onClick={() => {
                  setFilters(prev =>
                    prev.includes(item)
                      ? prev.filter(f => f !== item)
                      : [...prev, item]
                  );
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = color;
                    e.target.style.color = "#000";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#333";
                  }
                }}
              >
                {item}
              </button>
            );
          })}


          {filters.length > 0 && (
            <button className="clear_button" onClick={() => setFilters([])}>Clear</button>
          )}
        </div>
      )}

      <div className="table">
        <Header />
        {filteredProjects.map((proj, idx) => (
          <Row key={idx} {...proj} onClick={() => handleRowClick(proj)} />
        ))}
      </div>

      <Modal isOpen={!!selectedProject} project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Table;
