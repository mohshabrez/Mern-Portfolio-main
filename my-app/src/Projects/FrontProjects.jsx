import react from "../assets/React.png"
import NavSection from "./NavSection"
import movix from "../assets/movix.png"
import commerce from "../assets/commerce.png"
import mail from "../assets/MailBox.png"
import google from  "../assets/googleTranslate.png"
import portfolio from "../assets/port.png"

export const FrontProjects = () => {
    return(
        <>
        <NavSection/>
        <div className="projectsPage border grid grid-cols-3 gap-8 justify-between">
        <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={movix}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">MoviX</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Movix-movies-updates">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://movieidmb.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={commerce}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">E-Commerce</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/TravLo-E-Commerce">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://travlo-e-commerece.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={mail}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Mail Box</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Shabrez-s-Mail-Box">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://codesandbox.io/p/sandbox/react-ps-set-10-from-rockey-8s2dm6">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={google}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Google Translator Clone</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/google-translate-clone">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://googletranslatorapp.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={portfolio}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Animated Portfolio</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/my-portfolio-main">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://shabrezs-port.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          </div>
          </>
    )
}