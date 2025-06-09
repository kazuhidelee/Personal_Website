import React from 'react';
import './Row.css';
import Link from './Link';
import Label from './Label';

function Row({ projectName, category, description, date , link, onClick}) {
  const categoryColors = {
    "Distributed System": "#cad0eb", 
    "Operating System": "#d1e3c9", 
    "Web Development": "#b2dde1", 
    "Computer Vision": "#e2c7e5", 
    "Game Development": "#feddaa", 
    "Artificial Intelligent": "#fffcd0",
  };

  const backgroundColor = categoryColors[category] || "#dccbce"; 
  return (
    <div className="row" onClick={onClick}>
      <div className="row-item1"><strong>{projectName}</strong></div>
      <div className="row-item2"><Label text={category} color={backgroundColor}/></div>
      <div className="row-item3">{description}</div>
      <div className="row-item4">{date}</div>
	    <div className="row-item5"><Link ref={link} text={link}/></div>
    </div>
  );
}

export default Row;
