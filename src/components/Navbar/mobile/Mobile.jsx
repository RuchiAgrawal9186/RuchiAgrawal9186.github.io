import React from 'react'
import "./mobile.css"


const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className='mobile'>

      <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
        {/* <FaTimesCircle></FaTimesCircle> */}
      </div>

      <div className="mobile-options">

        <div className='mobile-option'>

          <div className="nav-link about" onClick={() => setIsOpen(!isOpen)}>
            <a href='#About'>
              About
            </a>
          </div>
          <div className="nav-link experience" onClick={() => setIsOpen(!isOpen)}>
            <a href='#Experience'>
              Experience
            </a>
          </div>
          <div className="nav-link skills" onClick={() => setIsOpen(!isOpen)}>
            <a href='#Skills'>
              Skills
            </a>
          </div>
          <div className="nav-link projects" onClick={() => setIsOpen(!isOpen)}>
            <a href='#Projects'>
              Projects
            </a>
          </div>
          <div className="nav-link contact" onClick={() => setIsOpen(!isOpen)}>
            <a href='#Contact'>
              Contact
            </a>
          </div>
          <div className="nav-link resume btn_resume" id="resume-button-1" onClick={() => {
              setIsOpen(!isOpen)
              window.open(
                "https://drive.google.com/file/d/1xDygTcnSEOTMcLW0Q_DY8_iVT_U6V9TG/view?usp=sharing",
                "_blank"
              )
          }
          }>
            <a href="./Ruchi-Agrawal-Resume.pdf"  id="resume-link-1" download>Resume</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mobile