import React from 'react'
import "./Projects.css"
import ProjectData from "./ProjectData.json"

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>

      <div className='projects_section'>
        {
          ProjectData.map((el)=>{
            return <div key={el.id}
            className="project-card"
            id="projects"
            style={{color: "white" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img src={el.image} alt={el.title} width="500" />
            <h2 className="project-title">{el.title}</h2>
            <p className="project-description">{el.description}.</p>
            <p className="project-tech-stack">{el.technologies}.</p>
            <div className="project-links-box">
              <button
                className="project-github-link"
                onClick={() => window.open(`${el.github}`, "_blank")}
              >
                GitHub <i className="fa-brands fa-github"></i>
              </button>
              <button
                className="project-deployed-link"
                onClick={() => window.open(`${el.deployed}`, "_blank")}
              >
                Live Link <i className="fa-solid fa-link"></i>
              </button>
            </div>
          </div>
          })
        }
      </div>
    
    </div>
  )
}

export default Projects