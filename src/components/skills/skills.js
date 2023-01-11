import React from "react";
import "./skills.css";
import htmlImg from "../../img/html.png"
import cssImg from "../../img/CSS.png"
import jsImg from "../../img/javascript.png"
import nodeImg from "../../img/nodeJs.png"
import reactImg from "../../img/react.png"
import gitImg from "../../img/git.png"
import herokuImg from "../../img/heroku.png"
import githubImg from "../../img/github.png"
import codeImg from "../../img/codepen.png"
import codesndImg from "../../img/codesandbox.png"
import postmanImg from "../../img/postman.png"
import netlifyImg from "../../img/netlify.png"
import vsImg from "../../img/vscode.png"
import pythonImg from "../../img/python.png"
import mongoImg from "../../img/mongodb.png"


function Skills() {
  return (
    <div className="Skill component__space" id="Skills">

      <div className="heading">
        <h1 className="heading">Technical Skills</h1>
      </div>

      <div className="container">
        <div class="Tech-skills">
          <div class="indivitual">
            <div class="tooltip">HTML</div>
            <span><img src={htmlImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">CSS</div>
            <span><img src={cssImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">JavaScript</div>
            <span><img src={jsImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">Node</div>
            <span><img src={nodeImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">React</div>
            <span><img src={reactImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">Python</div>
            <span><img src={pythonImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">MongoDB</div>
            <span><img src={mongoImg} alt="" /></span>
          </div>
        </div>
      </div>
      <div className="heading">
        <h1 className="heading">Tools Used</h1>
      </div>

      <div className="container">
      
        <div class="Tools">
          <div class="indivitual">
            <div class="tooltip">Git</div>
            <span><img src={gitImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">GitHub</div>
            <span><img src={githubImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">Heroku</div>
            <span><img src={herokuImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">Codepen</div>
            <span><img src={codeImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">Postman</div>
            <span><img src={postmanImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">Codesandbox</div>
            <span><img src={codesndImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">Netlify</div>
            <span><img src={netlifyImg} alt="" /></span>
          </div>
          <div class="indivitual">
            <div class="tooltip">VS</div>
            <span><img src={vsImg} alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;