import "./Art.css";
import React from 'react';
import Card from "../components/Card";
import Polaroid from "../components/Polaroid";
import suzi1 from "../images/art/suzi1.JPG";
import suzi2 from "../images/art/suzi2.JPG";
import ashin from "../images/art/ashin.jpeg";
import hyerin from "../images/art/hyerin.jpeg";
import jihyun from "../images/art/jihyun.jpeg";
import lights from "../images/art/lights.jpeg";
import man from "../images/art/man.jpeg";
import practice from "../images/art/practice.jpeg";
import yerin from "../images/art/yerin.jpeg";
import artist from "../images/artist.png";
import Link from "../components/Link";
function Art(){
	return(
	<div>
		<Card>
		<h2 className="myproject">My Art!</h2>
		<div className="profile">
			<p>
			Welcome to my art portfolio! 
			<br /><br />
			In my free time, I love to try out different art techniques and art styles. My favorite mediums are oil painting, oil pastel, and digital painting.  
			I mainly love to draw portaits because I like the complexity of capturing people's emotions and expressions.
			<br /><br />
			Below are my art works I've made during my free time, which includes mostly digital drawings.
			Take a look around and enjoy! 
			<br /><br />
			If you'd like to see more, follow my art account :-) <Link bold={true} color = {"#9f2d70"} ref={"https://www.instagram.com/tgalarie/"} text={"link to my art account"}></Link>
			</p>

			<img className="illustration" src={artist} alt="studying" />
		</div>
		</Card>
		<div className="gallery">
			<Polaroid src={suzi1} alt={"suzi"} text={"Korean actress Suzi from a scene from the K-drama Duna!"}></Polaroid>
			<Polaroid src={suzi2} alt={"suzi"} text={"Korean actress Suzi from a scene from the K-drama Duna!"}></Polaroid>
			<Polaroid src={ashin} alt={"ashin"} text={"Korean actress Jeon Ji-Hyun in Kingdom: Ashin of the North"}></Polaroid>
			<Polaroid src={hyerin} alt={"hyerin"} text={"Hyerin from the K-pop band New Jeans in their music video teaser"}></Polaroid>
			<Polaroid src={jihyun} alt={"jihyun"} text={"Korean actress Jeon Ji-Hyun from one of her earlier films"}></Polaroid>
			<Polaroid src={lights} alt={"lights"} text={"A drawing where I was praticing color and various lightings"}></Polaroid>
			<Polaroid src={man} alt={"man"} text={"A drawing where I was practicing draing hair and shadows"}></Polaroid>
			<Polaroid src={practice} alt={"practice"} text={"The first portrait drawin I've made on digital"}></Polaroid>
			<Polaroid src={yerin} alt={"yerin"} text={"Yerin from her album cover 'Love, Yerin' "}></Polaroid>
		</div>
	</div> );
}
export default Art;