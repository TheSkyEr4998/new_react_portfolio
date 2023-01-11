import React from "react";
import instaImg from "../img/instagram.png"
import githubImg from "../img/github.png"
import fbImg from "../img/facebook.png"
import twitterImg from "../img/twitter.png"
import linkedinImg from "../img/linkedin.png"
import "./footer.css";
// import codepen from ".../img/codepen.png";
// import github from ".../img/github.png";
// import linkedin from ".../img/linkedin.png";
// // import codesandbox from ".../img/codesandbox.png";
// // import instagram from ".../img/instagram.png";


export default function Footer() {

		//get current year
		const year = new Date().getFullYear();
		
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div class="social-icons">
							<a target="_blank" href="https://www.facebook.com/NJKT1105/">
							<img src={fbImg}/>
							</a>
							<a target="_blank" href="https://twitter.com/Skydive4998">
								<img src={twitterImg}/>
							</a>
							<a target="_blank" href="https://www.instagram.com/the.sky.er/">
								<img src={instaImg}/>
							</a>
							<a target="_blank" href="https://www.linkedin.com/in/theskyer4998/">
								<img src={linkedinImg}/>   
							</a>
							<a target="_blank" href="https://github.com/TheSkyEr4998">
								<img src={githubImg}/>
							</a>
						</div>
					</div>
					<br></br>
					<h5 className="pt-4">Niranjan Ghone &copy; {year}</h5>
				</div>
			</div>
		);
}
