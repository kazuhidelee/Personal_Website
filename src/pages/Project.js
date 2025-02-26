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

					<br /><br />
					These includes academic projects that tests my understanding of the concepts I've learned in my classes, 
					and passion projects that shows my creativity and interests in different areas of software engineering. 
				</p>
				<img className="illustration" src={laptop} alt="studying" />
			</div>
		</Card>
		<Table></Table>
		</div>

	);
}
export default Project;