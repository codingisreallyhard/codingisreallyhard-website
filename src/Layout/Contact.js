import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact" id="contact-me">
      <div className="container">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p className="mail">
            Get in touch with me <i className="fas fa-arrow-right"></i>{" "}
            f.g.constantin999@gmail.com
          </p>
          <p className="links">Or find me on:</p>
          {/* <a
            href="https://www.linkedin.com/in/sanket-bodake-995b5b205/"
            target="blank"
          >
            <i className="fab fa-linkedin">Linkedin</i>
          </a> */}

          <a href="https://github.com/codingisreallyhard" target="blank">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://dev.to/codingisreallyhard" target="blank">
            <i className="fab fa-dev"></i> Dev Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
