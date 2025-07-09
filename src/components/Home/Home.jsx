import React from 'react'
import "./Home.css"
// import Typical from 'react-typical'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Banner from '../Banner/Banner'
import Github from '../Github/Github'
import Experience from '../Experience/Experience'
// import GAIProjects from '../Projects/GAIProjects'


const Home = () => {
    return (
        <div id="home">
            <div>
            <Navbar/>
            </div>
            <section id="banner">
             <Banner/> 
            </section> 
            <section id="About">
                <About/>
            </section>
            <section id="Experience">
  <Experience />
</section>
            <section id="Skills">
                <Skills />
            </section>
            <section>
                <Github/>
            </section>
            <section id="Projects">
                <Projects />
            </section>
            {/* <section id="Projects">
                <GAIProjects />
            </section> */}
            <section id="Contact">
                <Contact />
            </section>

        </div>
    )
}

export default Home