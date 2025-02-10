import "./Sidebar.css";
import brush from "../images/brush.png";
import light from "../images/lightbolb.png";
import home from "../images/home.png";
import coffee from "../images/coffee.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "./Icon";
import shrink from "../images/left.png";
import expand from "../images/right.png";
import shrink_toggle from "../images/left_smile.png";
import expand_toggle from "../images/right_smile.png";

function Sidebar(){
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isHovered, setIsHovered] = useState(false); // Track hover state
	const handleToggle = () => {
		setIsCollapsed((prev) => !prev); 
	};

	
	return (
		<nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
			<div className="sidebar-logo">
				{!isCollapsed && <span>Tony's Portfolio</span>}
				<button 
					className="toggle-btn" 
					onClick={handleToggle}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Icon 
						src={isCollapsed 
							? (isHovered ? expand_toggle : expand) 
							: (isHovered ? shrink_toggle : shrink)
						} 
						alt="menu icon" 
					/>
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