import profile from "../assets/profile1.jpg"
import experience from "../assets/experience.png"
import education from "../assets/education.png"
import arrow from "../assets/arrow.png"

export const AboutMe = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


    return(
        <>
        <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-twocontainer">
          <img
            src={profile}
            alt="Profile"
            className="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={experience}
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>2.6+ years <br />MERN Development</p>
            </div>
            <div class="details-container">
              <img
                src={education}
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>Bachelor of<br/>Engineering & Technology</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            I'm a very ambitious Full Stack developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.

I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time.

If I need to define myself in one sentence that would be a smart person with big dreams, a sports fanatic, photography enthusiast, and tech-obsessed!!!
            </p>
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