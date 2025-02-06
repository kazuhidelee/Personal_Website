import React from 'react';
import './Row.css';
import Link from './Link';
import Label from './Label';

function Row({ projectName, category, description, date , link}) {
  const categoryColors = {
    "Distributed System": "#cad0eb", 
    "Operating System": "#d1e3c9", 
    "Web Development": "#b2dde1", 
    "Computer Vision": "#e2c7e5", 
  };

  // Use default color if the category isn't in the mapping
  const backgroundColor = categoryColors[category] || "#dccbce"; 
  return (
    <div className="row">
      <div className="row-item1">{projectName}</div>
      <div className="row-item2"><Label text={category} color={backgroundColor}/></div>
      <div className="row-item3">{description}</div>
      <div className="row-item4">{date}</div>
	    <div className="row-item5"><Link ref={link} text={link}/></div>
    </div>
  );
}

export default Row;
