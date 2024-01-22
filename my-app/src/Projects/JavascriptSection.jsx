import react from "../assets/React.png"
import NavSection from "./NavSection"
import travels from "../assets/trabels.png"
import tic from "../assets/tictactoe.png"
import birthday from "../assets/birthday.png"
import palindrome from "../assets/palindrome.png"
import triangle from "../assets/triangle.png"
import language from "../assets/language.png"
import portfolio from "../assets/portfolio.png"
import cashregister from "../assets/cashregister.png"
import emoji from "../assets/emoji.png"

export const JavascriptSection = () => {
    return(
        <>
        <NavSection/>
        <div className="projectsPage border grid grid-cols-3 gap-8 justify-between">
        <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={travels}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Hidden Travels</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Mark_Nine_travel_map">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://csb-1ryvet.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={tic}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Tic Tac Toe</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Tictactoe">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://tictaactoee.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={cashregister}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Cash Register</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Mark_ten_cash_register_app">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://cash-registeration-app.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={palindrome}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Emoji Translator?</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Mark_Eight_Emoji_Interpreter_mod">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://csb-ef5ins.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={palindrome}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Birthday Palindrome?</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Mark_thirteen_palindrome_bdy">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://bdy-palndrome.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={triangle}
                alt="Project 1"
                className="project-img w-max"
              />
            </div>
            <h2 className="experience-sub-title project-title">Is it Triangle?</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Mark_tweleve_fun_with_traingles">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://learn-trianglee.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={language}
                alt="Project 1"
                className="project-img w-max"
              />
            </div>
            <h2 className="experience-sub-title project-title">Minion Language!!</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Mark_six_minion_speak">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://minion-speak-eng-tran.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
           <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={portfolio}
                alt="Project 1"
                className="project-img w-max"
              />
            </div>
            <h2 className="experience-sub-title project-title">Portfolio</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Markfour-five_portfolio">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://portfloio-shabrez.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          </div>
          </>
    )
}