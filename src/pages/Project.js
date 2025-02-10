import "./Project.css";
import Table from "../components/Table";
import Card from "../components/Card";
import laptop from "../images/laptop.png";

function Project(){
	return(
		<div> 
		<Card>
			<h2 className="myproject">My Projects!</h2>
			<div className="profile">
				<p>
					Below is the collection of projects I've worked on during my academic journey!  
					Below is the collection of projects I've worked on during my academic journey!  
					Below is the collection of projects I've worked on during my academic journey!  
				</p>
				<img className="illustration" src={laptop} alt="studying" />
			</div>
		</Card>
		<Table></Table>
		</div>

	);
}
export default Project;