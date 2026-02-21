import "./Work.css";
import Card from "../components/Card";
import Label from "../components/Label";
import Icon from "../components/Icon";
import f5 from "../images/f5.png";
import wind from "../images/wind.png";
import web from "../images/web.png";
import bubble from "../images/bubble.png";
import dfg from "../images/dfg.png";
import Link from "../components/Link";
import work from "../images/work.png";
function Work() {
	return (
		<div>
			<Card>
				<h2 className="workexp">Work Experience!</h2>
				<div className="profile">
					<p>
						Throughout my software engeering journey, I’ve taken on diverse roles in software development, product management, and academic research.
						<br /><br />
						From working on cutting-edge networking technologies to leading meaningful projects that is impacting the other side of the globe,
						I’ve gained a lot ofhands-on experience in building scalable softwares and collaborating with diverse teams.
						<br /><br />
						Below are some of the places I’ve worked and the contributions I’ve made!
					</p>
					<img className="illustration" src={work} alt="work" />
				</div>
			</Card>
			<Card>
				{/* <Icon src={f5} alt={"pin"} /> */}
				<h3>Trading Reliability Engineer @ <Link ref={"https://www.f5.com/"} text={"Ubiquant"} bold={true} color={"#ff7468"} /></h3>
				<ul className="notion-labels">
					<Label text={"Infrastructure"} color={"#fef0cf"}></Label>
					<Label text={"Reliability"} color={"#fef0cf"}></Label>
					<Label text={"Linux"} color={"#fef0cf"}></Label>
					<Label text={"High Frequency Trading"} color={"#fef0cf"}></Label>
					<Label text={"Full-time"} color={"#f0d9d1"}></Label>
					<Label text={"10/2025 - 12/2025"} color={"#d6e9df"}></Label>
					<Label text={"New York, NY"} color={"#c9f0f8"}></Label>
				</ul>
				<ul className="bulletpoints">
					<li> Resolved 20+ production alerts by following SOPs, performing issue triage, and executing Linux system commands
						(logs, processes, services, networking) to diagnose and stabilize the trading systems</li>
					<li>Implemented and maintained PTP/NTP time-synchronization services across servers, including configuration, and
						validation to ensure millisecond-level time accuracy critical for real-time market data</li>
					<li>Built a Python based web crawler that scraped 2,000+ event logs from the internal trading-system monitoring
						platform, performed data cleaning and analysis, and generated visualizations to identify anomalies using pandas</li>
				</ul>
			</Card>
			<Card>
				<Icon src={f5} alt={"pin"} />
				<h3>Software Engineering Intern @ <Link ref={"https://www.f5.com/"} text={"F5"} bold={true} color={"#ff7468"} /></h3>
				<ul className="notion-labels">
					<Label text={"Networking"} color={"#fef0cf"}></Label>
					<Label text={"C"} color={"#fef0cf"}></Label>
					<Label text={"SAML Policy"} color={"#fef0cf"}></Label>
					<Label text={"Internship"} color={"#f0d9d1"}></Label>
					<Label text={"07/2024 - 09/2024"} color={"#d6e9df"}></Label>
					<Label text={"San Jose, CA"} color={"#c9f0f8"}></Label>
				</ul>
				<ul className="bulletpoints">
					<li>Designed and implemented a global session awareness architecture for BIG-IP Next Access, enabling secure
						communication and data sharing between different servers using Redis</li>
					<li>Developed the DSSM proxy service to handle session creation, lookup, and deletion across multiple servers,
						improving the efficiency of session management</li>
					<li>Conducted end-to-end testing of the DSSM proxy in standalone and multi-instance environments using pytest</li>
				</ul>
			</Card>

			<Card>
				<Icon src={wind} alt={"pin"} />
				<h3>Technical Research Assistance @ <Link ref={"https://detroitair.umich.edu/"} text={"University of Michigan School of Public Health"} bold={true} color={"#519ccb"} /> </h3>
				<ul className="notion-labels">
					<Label text={"API"} color={"#fef0cf"}></Label>
					<Label text={"Web Development"} color={"#fef0cf"}></Label>
					<Label text={"Backend"} color={"#fef0cf"}></Label>
					<Label text={"Research"} color={"#f0d9d1"}></Label>
					<Label text={"05/2024 - 12/2024"} color={"#d6e9df"}></Label>
					<Label text={"Ann Arbor, MI"} color={"#c9f0f8"}></Label>
				</ul>
				<ul className="bulletpoints">
					<li>Worked with 6 team members to create an a full stack website with a real-time interactive air quality map to
						deliver more transparent air quality data to citizens of Southeast Michigan using Typescript and Flask</li>
					<li>Developed a proprietary REST-API to calculate standardized air quality indices using data, collected from 50+
						EPA and private sensors, involving mySQL, and ExpressJS</li>
					<li>Visualized and interpreted air data and wind rose diagrams using the pandas and numpy library in Python</li>
				</ul>
			</Card>

			<Card>
				<Icon src={web} alt={"pin"} />
				<h3>Web Developer @  <Link ref={"https://midas.umich.edu/"} text={"Michigan Institute for Data Science"} bold={true} color={"#f7c406"} /></h3>
				<ul className="notion-labels">
					<Label text={"Web Development"} color={"#fef0cf"}></Label>
					<Label text={"Scripting"} color={"#fef0cf"}></Label>
					<Label text={"PHP"} color={"#fef0cf"}></Label>
					<Label text={"Part-time"} color={"#f0d9d1"}></Label>
					<Label text={"04/2024 - Present"} color={"#d6e9df"}></Label>
					<Label text={"Ann Arbor, MI"} color={"#c9f0f8"}></Label>
				</ul>
				<ul className="bulletpoints">
					<li>Performed regular updates, data entry, and maintained the MIDAS website’s front-end using WordPress</li>
					<li>Made customization to the back-end infrastructure using PHP to improved site load time performance by 25%</li>
					<li>Developed Python scripts to automate web scraping of faculty metadata to accelerate the data collection process</li>
				</ul>
			</Card>

			<Card>
				<Icon src={bubble} alt={"pin"} />
				<h3> Founding Engineer @ <Link ref={"https://www.thebubbleproject.org/"} text={"Bubble - Learn Science!"} bold={true} color={"#3e88cc"} /></h3>
				<ul className="notion-labels">
					<Label text={"Full Stack"} color={"#fef0cf"}></Label>
					<Label text={"React/Typescript"} color={"#fef0cf"}></Label>
					<Label text={"Supabase"} color={"#fef0cf"}></Label>
					<Label text={"Start up"} color={"#f0d9d1"}></Label>
					<Label text={"08/2024 - 12/2024"} color={"#d6e9df"}></Label>
					<Label text={"Ann Arbor, MI"} color={"#c9f0f8"}></Label>
				</ul>
				<ul className="bulletpoints">
					<li>Designed and developed a web application that aids students with lower resource backgrounds to comprehending
						scientific research papers through interactive learning experiences</li>
					<li>Engineered the interactive front-end UI and quiz modules using React and Typescript, and utilized supabase for
						user authentication and databases</li>
				</ul>
			</Card>

			<Card>
				<Icon src={dfg} alt={"pin"} />
				<h3> Product Manager @ <Link ref={"https://drive.google.com/file/d/1ikIjNxVM3HYIiPpl1ye0KM8lK0vX8xCb/view"} text={"Develop for Good"} bold={true} color={"#ac4c72"} /></h3>
				<ul className="notion-labels">
					<Label text={"React Native"} color={"#fef0cf"}></Label>
					<Label text={"Firebase"} color={"#fef0cf"}></Label>
					<Label text={"Full Stack"} color={"#fef0cf"}></Label>
					<Label text={"Product Management"} color={"#f0d9d1"}></Label>
					<Label text={"05/2024 - 08/2024"} color={"#d6e9df"}></Label>
					<Label text={"Remote"} color={"#c9f0f8"}></Label>
				</ul>
				<ul className="bulletpoints">
					<li>Led the development of the Concordia app, a mobile application for 200+ global volunteers to streamline support
						efforts, impacting 2.8 million people in the Dominican Republic</li>
					<li>Managed team of 7, orchestrating weekly meetings to address development agendas and ensure team
						alignment, communicating with client about progress updates, feedback, and negotiate project requirements</li>
					<li>Contributed and guided to both frontend and backend development using React Native and JavaScript,
						implementing interactive interface, user authentication, and Firebase database connectivity</li>
				</ul>
			</Card>

		</div>);
}
export default Work;