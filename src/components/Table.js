import "./Table.css";
import React from 'react';
import Row from "./Row";
import Header from "./Header";

function Table() {
  return (
    <div className="table_container">
      <div className="table">
          <Header />
          <Row projectName={"Bubble! - Learn Science"} category={"Web Development"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"Arbor Advisor"} category={"Web Development"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"Concordia"} category={"Mobile Development"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"Search Engine"} category={"Distributed System"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"Thread Library"} category={"Operating System"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"BW Colorization"} category={"Computer Vision"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"Mission Valentine"} category={"Game Development"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"Mapreduce paradigm"} category={"Database System"} description={"description"} date={"2024"} link={"link"}/>
          <Row projectName={"Personal Website"} category={"Web Development"} description={"description"} date={"2024"} link={"link"}/>
      </div>
    </div>
  );
}

export default Table;
