import React from "react";

//import about components
// import Aboutme from "./../components/about/about.me";
import Skill from "../components/skills/skills";

export default function Skillset(props) {
	return (
		<div id="my-skills" className="content-containers container text-center mt-5" >
			<h1 id="about" className="mb-3 wow fadeInLeft">Skills</h1>
			<Skill />
		</div>
	);
}