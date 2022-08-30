import React from "react";
import "./Portofolio.css";

import PortofolioImage from "./PortofolioImage";
function Portofolio() {
  return (
    <section id="my-works">
      <div className="portfolio">
        <div className="proj-heading">
          <h1>Portfolio</h1>
        </div>

        <PortofolioImage />
        <div className="more-work">
          <p>More</p>
          <a href="https://github.com/codingisreallyhard" target="blank">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
