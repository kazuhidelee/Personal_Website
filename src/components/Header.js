import React from 'react';
import './Header.css';
// import Icon from "./Icon";
// import pin from "../images/pin.png";
import Pin from "../images/pin2.png";
import Icon from './Icon';

function Header() {
  return (
    <div className="header_row">
      <div className="row-item1"><Icon src={Pin} alt={"pin icon"}/> Name</div>
      <div className="row-item2"><Icon src={Pin} alt={"pin icon"}/> Category</div>
      <div className="row-item3"><Icon src={Pin} alt={"pin icon"}/> Description</div>
      <div className="row-item4"><Icon src={Pin} alt={"pin icon"}/> Date</div>
	    <div className="row-item5"><Icon src={Pin} alt={"pin icon"}/> Link</div>
    </div>
  );
}

export default Header;
