import  profile  from "../assets/profile.jpg"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import cv from "../assets/resume-example.pdf"

export const Profile = () => {
   const linkedInUrl = "https://www.linkedin.com";
   const githubUrl = "https://github.com/mohshabrez"
   
   const handleClickScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
   
   return(
        <>
            <section id="profile">
                <div className="section__pic-container">
                    <img src={profile} alt="" />
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Shabrez G</h1>
                    <p className="section__text__p2">MERN Developer</p>
                    <div className="btn-container">
                    <a href={cv} className="btn1 btn-color-2">
                        Download CV
                    </a>
                    <button onClick={handleClickScroll} className="btn btn-color-1">
                        Contact Info
                    </button>
                    </div>
                    <div id="socials-container">
                    <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <img
                        src={linkedin}
                        alt="My LinkedIn profile"
                        className="icon"
                    />
                     </a>
                     <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img
                        src={github}
                        alt="My Github profile"
                        className="icon"/>
                    </a>
                    </div>
                </div>
            </section>
        </>
    )
} 