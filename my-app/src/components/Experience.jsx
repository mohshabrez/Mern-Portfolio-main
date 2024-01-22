import checkMark from "../assets/checkmark.png"
import arrow from "../assets/arrow.png"

export const Experience = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience-Stack</h1>
      <div class="experience-details-container">
        <div class="about-containers container-mob">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>ReactJS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Tail Wind</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>My SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Jest</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>FireBase</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Redux/RTK</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        class="icon arrow"
        onClick={handleClickScroll}
      />
    </section>
        </>
    )
}