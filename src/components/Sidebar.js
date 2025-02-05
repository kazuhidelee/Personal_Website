import "./Sidebar.css";
import brush from "../images/brush.png";
import light from "../images/lightbolb.png";
import home from "../images/home.png";
import coffee from "../images/coffee.png";
import { Link } from "react-router-dom";

function Sidebar(){
	return (
		<nav className="sidebar">
			<div className="sidebar-logo">Tony's Portfolio</div>
			<ul className="sidebar-menu">
			<li><Link to="/"><img src={home} className="icon" alt="home icon"/> Home</Link></li>
			<li><Link to="/projects"><img src={light} className="icon" alt="project icon"/> Projects</Link></li>
			<li><Link to="/work"><img src={coffee} className="icon" alt="work icon" /> Work Experience</Link></li>
			<li><Link to="/art"><img src={brush} className="icon" alt="art icon"/> Art Gallery</Link></li>
			</ul>
      	</nav> 
	);
}
export default Sidebar;