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
function Art(){
	return(
	<div>
		<Card>
		<h2 className="myproject">My Art!</h2>
		<div className="profile">
				<p>Welcome to my art portfolio! Welcome to my art portfolio!
				Welcome to my art portfolio!
				Welcome to my art portfolio!
				Welcome to my art portfolio!Welcome to my art portfolio!
				</p>
			<img className="illustration" src={artist} alt="studying" />
		</div>
		</Card>
		<div className="gallery">
			<Polaroid src={suzi1} alt={"suzi"} text={"text"}></Polaroid>
			<Polaroid src={suzi2} alt={"suzi"} text={"text"}></Polaroid>
			<Polaroid src={ashin} alt={"ashin"} text={"text"}></Polaroid>
			<Polaroid src={hyerin} alt={"hyerin"} text={"text"}></Polaroid>
			<Polaroid src={jihyun} alt={"jihyun"} text={"text"}></Polaroid>
			<Polaroid src={lights} alt={"lights"} text={"text"}></Polaroid>
			<Polaroid src={man} alt={"man"} text={"text"}></Polaroid>
			<Polaroid src={practice} alt={"practice"} text={"text"}></Polaroid>
			<Polaroid src={yerin} alt={"yerin"} text={"text"}></Polaroid>
		</div>
	</div> );
}
export default Art;