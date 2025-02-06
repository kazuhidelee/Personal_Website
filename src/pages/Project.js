import "./Project.css";
import Table from "../components/Table";
import Card from "../components/Card";
import Link from "../components/Link";
function Project(){
	return(
		<div> 
		<Card>
			<h2 className="myproject">My Projects!</h2>
			<p>
            Below is the collection of projects I've worked on during my academic journey!  
            My name is <p className="highlight"><strong>Tony</strong></p>, and I’m a Computer Science student at the <Link ref={"https://umich.edu/"} text="University of Michigan"/>.  

            <br /><br />
            My journey into programming started later than most, but that didn’t stop me from diving headfirst into hands-on experiences. Through internships, part-time jobs, and personal projects, I’ve built both **technical expertise** and **strong teamwork skills**—fueling my passion for developing solutions to real-world problems.  

            <br /><br />
            Beyond coding, my multicultural background—growing up in China, Korea, and Japan—has shaped my adaptability and given me a **diverse perspective** on problem-solving. This ability to navigate different environments and viewpoints is something I bring to every team and project.  

            <br /><br />
            Outside of tech, I love curating **music playlists** and expressing creativity through **art** 🎨.  
          	</p>
		</Card>
		<Table></Table>
		</div>

	);
}
export default Project;