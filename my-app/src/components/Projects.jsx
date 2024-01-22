import mern from "../assets/MERN.png"
import react from "../assets/React.png"
import blogger from "../assets/Blogger.jpg" 
import arrow from "../assets/arrow.png"
import { Link } from "react-router-dom"
import javascript from "../assets/javascript.jpg"



export const Projects = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return(
        <>
        <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
            <div className="details-container projectsContainer color-container">
            <Link to={'/mernProjects'}>
            <div className="article-container">
              <img
                src={mern}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">MERN Projects</h2>
            </Link>
          </div>
          <div className="details-container projectsContainer color-container">
            <Link to={'/frontProjects'}>
            <div className="article-container">
              <img
                src={react}
                alt="Project 2"
                className="project-img2"
              />
            </div>
            <h2 className="experience-sub-title project-title">FrontEnd Projects</h2>
            </Link>
          </div>
          <div className="details-container projectsContainer color-container">
            <Link to={'/javascript'}>
            <div className="article-container">
              <img
                src={javascript}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">JavaScript</h2>
            </Link>
          </div>
          <div className="details-container projectsContainer color-container">
            <Link to={'/blogSection'}>
            <div className="article-container">
              <img
                src={blogger}
                alt="Project 3"
                className="project-img3"
              />
            </div>
            <h2 className="experience-sub-title project-title">Blogs/Designs</h2>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleClickScroll}
      />
    </section>
        </>
    )
}