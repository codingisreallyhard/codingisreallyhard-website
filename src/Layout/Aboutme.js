import React from "react";
import "./Aboutme.css";
function Aboutme() {
  return (
    <section className="about-me" id="about">
      <div className="container">
        <div className="about-content">
          <div className="left-content">
            <div>
              <h1 className="about-heading">About Me</h1>
            </div>

            <p className="about-p">
              I am a 23 year old, with a passion for problem solving, being a
              self-taught Developer through online courses and tutorials, I am
              always eager to learn even more!
            </p>
            <div className="work-arrow">
              <p>
                <a href="#my-works">
                  Check out my work <i className="fas fa-arrow-down"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="skills">
            <div className="right-content">
              <div>
                <h1 className="skills-heading">My Skills</h1>
              </div>
              <div className="skills-bar">
                <div className="bar">
                  <div className="info">
                    <span>HTML</span>
                  </div>
                  <div className="progress-line">
                    <span className="html"></span>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>CSS/SASS</span>
                    </div>
                    <div className="progress-line">
                      <span className="css"></span>
                    </div>
                    <div className="bar">
                      <div className="info">
                        <span>React</span>
                      </div>
                      <div className="progress-line">
                        <span className="react"></span>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>JAVASCRIPT/TYPESCRIPT</span>
                        </div>
                        <div className="progress-line">
                          <span className="javascript"></span>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>Bootstrap5</span>
                          </div>
                          <div className="progress-line">
                            <span className="node"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-arrow-2">
                <p>
                  <a href="#my-works">
                    Check out my work <i className="fas fa-arrow-down"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
