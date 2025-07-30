import React from "react";
import "./About.css";
// import "./"
// import Typical from 'react-typical'

const About = () => {
  return (
    <div id="about" className="about section">
      <div className="about_photo">
        <img src="./images/ruchi.png" alt="mypic" className="home-img" />
      </div>

      <div className="about_info">
        <h2>About me</h2>

        <p id="user-detail-intro">
          Hi, I'm a frontend developer from Dahod, Gujarat, who loves building
          clean and responsive user interfaces. I'm passionate about solving
          design and development challenges using technologies like React.js,
          JavaScript, HTML, CSS, and Material UI.
          <br />
          <br />I enjoy learning new things, improving my coding skills, and
          working on real-world projects that push me to grow. I care about
          writing clean, readable code and building UIs that are both functional
          and user-friendly. Whether working independently or with a team, I
          always strive to do my best and keep improving every day.
        </p>

        <div>
          <button id="resume-button-2" className="btn_resume">
            <a
              download="Ruchi-Agrawal-Resume.pdf"
              // href="./Ruchi-Agrawal-Resume.pdf"
              href="https://drive.google.com/uc?export=download&id=1xDygTcnSEOTMcLW0Q_DY8_iVT_U6V9TG"
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1xDygTcnSEOTMcLW0Q_DY8_iVT_U6V9TG/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
