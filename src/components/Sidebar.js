import "./Sidebar.css";
import menu from "../images/menubar.png";
import brush from "../images/brush.png";
import light from "../images/lightbolb.png";
import home from "../images/home.png";
import coffee from "../images/coffee.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "./Icon";

function Sidebar(){
	const [isCollapsed, setIsCollapsed] = useState(false);
	const handleToggle = () => {
		setIsCollapsed((prev) => !prev); 
	};

	  
	return (
		<nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
			<div className="sidebar-logo">
				{!isCollapsed && <span>Tony's Portfolio</span>}
				<button className="toggle-btn" onClick={handleToggle}>
				{isCollapsed ? <Icon src={menu} alt={"menu icon"}/>  : <Icon src={menu} alt={"menu icon"}/>} {/* Arrow changes based on collapsed state */}
				</button>
			</div>
			<ul className={`sidebar-menu ${isCollapsed ? "collapsed" : ""}`}>
			<li><Link to="/"><img src={home} className="icon" alt="home icon"/> Home</Link></li>
			<li><Link to="/projects"><img src={light} className="icon" alt="project icon"/> Projects</Link></li>
			<li><Link to="/work"><img src={coffee} className="icon" alt="work icon" /> Work Experience</Link></li>
			<li><Link to="/art"><img src={brush} className="icon" alt="art icon"/> Art Gallery</Link></li>
			</ul>
      	</nav> 
	);
}
export default Sidebar;