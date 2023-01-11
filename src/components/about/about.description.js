import React,{useState} from "react";

import myImage from "../../img/myImage.png";

//import skillBars
// import Aboutme from "./about.me";

export default function AboutDescription(props) {
    
    return (
        <div className="row wow fadeIn" style={{ marginTop: 3 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <div>
                    <img
                        className={"img-fluid"}
                        src={myImage}
                        alt="Portfolio Image"
                        style={{
                            height: 450 + "px",
                            width: 350 + "px"
                        }}
                    />
                </div>
            </div>
            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
                <p className="mytext pt-3">
                    An aspiring full stack web developer, Knowledgable of front-end development.
                    I love to transform ideas into reality using code. I'm passionate about using Javascript and React JS to create awesome user experiences.
                    {/* I love to work individually as well as for collaborative projects also. */}
                </p>
                <p className="mytext pt-3">
                    I have done my Mechanical Engineering. 
                    Later on, IT Sector's growth cought my interest and 
                    I transformed myself as a Full Stack Web Developer by joining Masai School in September 2021.
                </p>
                <p className="mytext pt-3">
                    Since from February 2022, I am working in TCS Pune 
                    as an Assistent System Engineer post with a project in .NET technology 
                    but I want to expertise myself as a Full Stack Web Developer 
                    in the upcoming years with React JS technology.  
                </p>
            </div>
        </div>
    );
}