import "./Home.css";
import Icon from "../components/Icon";
import Label from "../components/Label";
import Card from "../components/Card";
import headshot from "../images/headshot.png";
import pin from "../images/pin.png";
import book from "../images/book.png";
import download from "../images/download.png";
import resume from "../docs/Kazuhide_Tony_Lee_Resume_Jan.pdf";
import Link from "../components/Link";

function Home(){
	return (
  <div>
        <Card>
          <h2 className="aboutme">About Me!</h2>
          <div className="profile">
          <img className="headshot" src={headshot} alt="Tony's headshot" />
          <p>
            Hello, and welcome to my website!  
            My name is <p className="highlight"><strong>Tony</strong></p>, and I’m a senior Computer Science major at the <Link ref={"https://umich.edu/"} text="University of Michigan" color={"#03274b"} bold={true}/>.  

            <br /><br />
            Although I started my journey as a programmer relatively late, 
            I was able to get involved in a lot of hands-on experience through internships, part-time jobs, and projects 
            where I was able to gain both technical skills and teamworks, 
            and become passionate about building solutions to real world problems.   

            <br /><br />
            Beyond coding, my unique experience of growing up across countries like China, Korea, and Japan has shaped my adaptability in different environments,
            and also given me an ability to view situations in diverse perspectives, 
            which I believe will be a great asset and skill I can bring to the table.

            <br /><br />
            For hobbies, I enjoy making music playlists and art! 🎨.  
          </p>
          </div>
        </Card>

        <Card>
        <h3><Icon src={pin} alt={"pin icon"}/>Education</h3>
          <p className="edu"><strong>University of Michigan - Ann Arbor</strong></p>
          <ul className="notion-labels">
            <Label text={"2023-2025"} color={"#edf2ec"}></Label>
            <Label text={"Bachelors of Science"} color={"#fbecdd"}></Label>
            <Label text={"Computer Science"} color={"#e8f2f9"}></Label>
          </ul>
          

          <p><strong>University of California - Davis</strong></p>
          <ul className="notion-labels">
            <Label text={"2021-2023"} color={"#edf2ec"}></Label>
            <Label text={"Bachelors of Science"} color={"#fbecdd"}></Label>
            <Label text={"Computer Science"} color={"#e8f2f9"}></Label>
          </ul>
          
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
        <h3><Icon src={pin} alt={"pin icon"}/>Language Skills</h3>
          <ul className="notion-labels">
            <Label color={"#f1e0e9"} text={"Korean - Native"}></Label>
            <Label color={"#deebef"} text={"Madarin - Native"}></Label>
            <Label color={"#f8e9df"} text={"Japanese - Fluent"}></Label>
            <Label color={"#faf3db"} text={"English - Fluent"}></Label>
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
            <Label color={"#f4e0e9"} text={"Computer Science Theory"}></Label>
            <Label color={"#f4e0e9"} text={"Human-Centerd Software Design and Development"}></Label>
          </ul>
        </Card>

        <Card>
        <h3><Icon src={pin} alt={"pin icon"}/>Interests</h3>
          <ul className="notion-labels">
            <Label text={"Backend Development"}></Label>
            <Label text={"Full-stack Development"}></Label>
            <Label text={"API"}></Label>
            <Label text={"Networking"}></Label>
            <Label text={"Distributed Systems"}></Label>
            <Label text={"Cloud Computing"}></Label>
            <Label text={"UI/UX"}></Label>
            <Label text={"Web Development"}></Label>
          </ul>
        </Card>

        <Card>
        <h3><Icon src={pin} alt={"pin icon"}/>Campus Involvement</h3>
          <ul className="notion-labels">
            <Label color={"#e7e4f1"} text={"Society of Asian Scientists and Engineers - Professional Chair"}></Label>
            <Label color={"#dfedea"} text={"Tech for Social Good - Tech Lead"}></Label>
            <Label color={"#deebef"} text={"MDraw - Social Meida Chair"}></Label>
            <Label color={"#f1e0e9"} text={"Google Developer Student Club"}></Label>
          </ul>
        </Card>

        <Card>
        <h3><Icon src={pin} alt={"pin icon"}/>Contact & Links</h3>
          <div><strong>LinkedIn:</strong> <Link ref={"https://www.linkedin.com/in/tonykazuhidelee/"} text={"https://www.linkedin.com/in/tonykazuhidelee/"}></Link></div>
          <div><strong>Github:</strong> <Link ref={"https://github.com/kazuhidelee"} text={"https://github.com/kazuhidelee"}></Link></div>
          <div><strong>Email:</strong> <Link ref={"tylee2715@gmail.com"} text={"tylee2715@gmail.com"}></Link></div>
        </Card>
        <Card>
        <h3><Icon src={pin} alt={"pin icon"}/>Resume</h3>
          <div className="resume-container">
            <a href={resume} download="Tony_Lee_Resume.pdf" className="resume-button">
            <Icon src={download} alt={"doc icon"}/>   Download Resume
            </a>
          </div>
        </Card>
        
    </div>);
}
export default Home;