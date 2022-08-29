import React, { useState } from "react";
import "./Portofolio.css";
import authapp from "../Assets/authapp.png";
import guess from "../Assets/guessgame.png";
import eshop from "../Assets/reacteshop.png";
import { render } from "@testing-library/react";

function Portofolio() {
  const [hover, onHover] = useState(eshop);

  return (
    <section id="my-works">
      <div className="portfolio">
        <div className="proj-heading">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-content container">
          <div className="proj-1">
            <div className="pdiv">
              <img
                src={hover}
                onMouseEnter={() => {
                  onHover(guess);
                }}
                onMouseOut={() => {
                  onHover(eshop);
                }}
                alt="React Eshop project"
                className="p1"
              />
            </div>
            <div className="proj1-details">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-js"></i>
              <h2>React E-Shop</h2>
              <p>Built Using HTML,CSS,React.js</p>
              <button>
                <a
                  href="https://github.com/codingisreallyhard/React-E-Shop"
                  target="blank"
                >
                  View source <i className="fas fa-external-link-alt"></i>
                </a>
              </button>
            </div>
          </div>

          <div className="proj-2">
            <img src={authapp} alt="React Auth" />
            <div className="proj2-details">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <h2>Small Autenthication App</h2>
              <p>Built Using HTML,CSS, React.js</p>
              <button>
                <a
                  href="https://github.com/codingisreallyhard/React-Auth-Project"
                  target="blank"
                >
                  View source <i className="fas fa-external-link-alt"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="proj-2">
            <img src={guess} alt="Guess game" />
            <div className="proj2-details">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <h2>Guess Game</h2>
              <p>Built Using HTML,CSS, JAVASCRIPT</p>
              <button>
                <a
                  href="https://github.com/codingisreallyhard/Guess-Game-Javascript"
                  target="blank"
                >
                  View source <i className="fas fa-external-link-alt"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="more-work">
            <p>More</p>
            <a href="https://github.com/codingisreallyhard" target="blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
