import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1 className="section-title">Experience</h1>
      <div className="experience-content">
        <h3>Frontend Developer</h3>
        <p className="company">PortQii, Bangalore, Karnataka | Jan 2024 – Jul 2025</p>
        <p className="experience-description">
          At Portqii, I worked as a frontend developer on the Asset Naming Assistant (ANA) — a web-based application that helps marketing teams manage and create assets using standardized naming conventions. I contributed to building user-friendly, responsive interfaces using React.js, Redux Toolkit, JavaScript, and Material UI. <br/><br/>My work involved implementing dynamic forms, integrating REST APIs for business logic and tagging configurations, and improving UI performance. I collaborated closely with backend developers and project leads to deliver scalable, production-ready features.
        </p>
      </div>
    </section>
  );
};

export default Experience;
