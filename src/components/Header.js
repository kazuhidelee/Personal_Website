import React from 'react';
import './Header.css';
// import Icon from "./Icon";
// import pin from "../images/pin.png";

function Header() {
  return (
    <div className="header_row">
      <div className="row-item1">📍 Name</div>
      <div className="row-item2">📍 Category</div>
      <div className="row-item3">📍 Description</div>
      <div className="row-item4">📍 Date</div>
	    <div className="row-item5">📍 Link</div>
    </div>
  );
}

export default Header;
