import "./Home.css";
import Icon from "../components/Icon";
import Label from "../components/Label";
import Card from "../components/Card";
import headshot from "../images/headshot.png";
import pin from "../images/pin.png";
import book from "../images/book.png";
import download from "../images/download.png";
import resume from "../docs/Kazuhide_Tony_Lee_Resume_Jan.pdf";

function Home(){
	return (<div className="content">
        <Card>
          <h2 className="aboutme">About Me!</h2>
          <div className="profile">
          <img className="headshot" src={headshot} alt="Tony's headshot" />
          <p>
            Hello, and welcome to my website!  
            My name is <p className="highlight"><strong>Tony</strong></p>, and I’m a Computer Science student at the <a href="https://umich.edu/" className="styled_link">University of Michigan</a>.  

            <br /><br />
            My journey into programming started later than most, but that didn’t stop me from diving headfirst into hands-on experiences. Through internships, part-time jobs, and personal projects, I’ve built both **technical expertise** and **strong teamwork skills**—fueling my passion for developing solutions to real-world problems.  

            <br /><br />
            Beyond coding, my multicultural background—growing up in China, Korea, and Japan—has shaped my adaptability and given me a **diverse perspective** on problem-solving. This ability to navigate different environments and viewpoints is something I bring to every team and project.  

            <br /><br />
            Outside of tech, I love curating **music playlists** and expressing creativity through **art** 🎨.  
          </p>
          </div>
        </Card>


        
        <Card>
          <h3><Icon src={pin} alt={"pin icon"}/>Technical Skills</h3>
          <ul className="notion-labels">
            {/* languages */}
            <Label text={"Python"}></Label>
            <Label text={"C/C++"}></Label>
            <Label text={"JavaScript/TypeScript"}></Label>
            <Label text={"Java"}></Label>
            <Label text={"Python"}></Label>
            <Label text={"PHP"}></Label>
            <Label text={"MatLab"}></Label>
            {/* frameworks */}
            <Label color={"#daecda"} text={"React"}></Label>
            <Label color={"#daecda"} text={"React Native"}></Label>
            <Label color={"#daecda"} text={"Node.js"}></Label>
            <Label color={"#daecda"} text={"Flask"}></Label>
            <Label color={"#daecda"} text={"Postman"}></Label>
            <Label color={"#daecda"} text={"Git"}></Label>
            <Label color={"#daecda"} text={"Redis"}></Label>
            {/* databases */}
            <Label color={"#d2e4ef"} text={"SQL"}></Label>
            <Label color={"#d2e4ef"} text={"MongoDB"}></Label>
            <Label color={"#d2e4ef"} text={"Supabase"}></Label>
            <Label color={"#d2e4ef"} text={"AWS"}></Label>
            <Label color={"#d2e4ef"} text={"GCP"}></Label>
          </ul>
        </Card>

        <Card>
          <h3><Icon src={book} alt={"book icon"}/>Relevant Courses</h3>
          <ul className="notion-labels">
            <Label color={"#f4e0e9"} text={"Data Structure and Algorithms"}></Label>
            <Label color={"#f4e0e9"} text={"Datbase Systems"}></Label>
            <Label color={"#f4e0e9"} text={"Web Systems"}></Label>
            <Label color={"#f4e0e9"} text={"Computer Architecture"}></Label>
            <Label color={"#f4e0e9"} text={"Operating Systems"}></Label>
            <Label color={"#f4e0e9"} text={"Artificial Intelligent"}></Label>
            <Label color={"#f4e0e9"} text={"Computer Vision"}></Label>
            <Label color={"#f4e0e9"} text={"Software Engineering"}></Label>
            <Label color={"#f4e0e9"} text={"Foundations of Computer Science"}></Label>
            <Label color={"#f4e0e9"} text={"Human-Centerd Software Design and Development"}></Label>
          </ul>
        </Card>

        <Card>
          <div className="resume-container">
            <a href={resume} download="Tony_Lee_Resume.pdf" className="resume-button">
            <Icon src={download} alt={"doc icon"}/>   Download Resume
            </a>
          </div>
        </Card>
        
    </div>);
}
export default Home;