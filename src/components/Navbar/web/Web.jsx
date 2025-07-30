import React from "react";
import "./Web.css";
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { Button } from '@chakra-ui/react';

const Web = () => {
  // console.log(colorMode)
  return (
    <div className="web">
      <div className="web-option">
        <div className="nav-link about">
          <a href="#About">About</a>
        </div>
        <div className="nav-link experience">
          <a href="#Experience">Experience</a>
        </div>
        <div className="nav-link skills">
          <a href="#Skills">Skills</a>
        </div>
        <div className="nav-link projects">
          <a href="#Projects">Projects</a>
        </div>
        <div className="nav-link contact">
          <a href="#Contact">Contact</a>
        </div>

        {/* <div onClick={()=> window.open(
      "https://drive.google.com/file/d/1xDygTcnSEOTMcLW0Q_DY8_iVT_U6V9TG/view?usp=sharing",
      "_blank"
    )}>
        <a href="./Ruchi-Agrawal-Resume.pdf" download>Resume</a>
        </div> */}

        <div className="nav-link resume">
          <button
            id="resume-button-1"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1xDygTcnSEOTMcLW0Q_DY8_iVT_U6V9TG/view?usp=sharing",
                "_blank"
              )
            }
            className="btn_resume"
          >
            {" "}
            <a
              href="https://drive.google.com/uc?export=download&id=1xDygTcnSEOTMcLW0Q_DY8_iVT_U6V9TG"
              // href="./Ruchi-Agrawal-Resume.pdf"
              id="resume-link-1"
              download
            >
              Resume
            </a>
          </button>
        </div>
      </div>
      {/* <div></div> */}

      {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
    </div>
  );
};

export default Web;
