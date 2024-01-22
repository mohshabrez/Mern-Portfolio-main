import NavSection from "./NavSection"
import design from "../assets/design1.png"
import blog1 from "../assets/nlog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.webp"
import blog4 from "../assets/blog4.webp"
import blog5 from "../assets/blog5.webp"
import blog6 from "../assets/blog6.webp"
import blog7 from "../assets/blog7.webp"
import blog8 from "../assets/blog8.webp"


export const BlogSection = () => {
    return(
        <>
        <NavSection/>
        <div className="projectsPage border grid grid-cols-3 gap-8 justify-between">
        <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={design}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Freelance Design work</h2>
            <div class="btn-container">
            <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/layout">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://landingassig.netlify.app/">Link Demo</a>
              </button>
              </div>
          </div>
        <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Css-Responsive</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Movix-movies-updates">Read</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog2}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Personal Blog</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://portfloio-shabrez.netlify.app/aboutme">Read</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog3}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">== VS ===</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://shabrezdev.hashnode.dev/difference-between-vs">Read</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog4}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Errors</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://shabrezdev.hashnode.dev/type-error-reference-error">Read</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog5}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Reduce Method</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://shabrezdev.hashnode.dev/reduce-method-in-javascript">Read</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog6}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Find Method</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://shabrezdev.hashnode.dev/find-method-in-javascript">Read</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog7}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Filter Method</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://shabrezdev.hashnode.dev/filter-method-in-javascript">Read</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={blog8}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Map Method</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://shabrezdev.hashnode.dev/map-method-in-javascript">Read</a>
              </button>
              </div>
          </div>
          </div>
          </>
    )
}