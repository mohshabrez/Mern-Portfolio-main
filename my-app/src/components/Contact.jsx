import email from "../assets/email.png"
import linked from "../assets/linkedin.png"

export const Contact = () => {
    return(
        <>
        <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:sheikshabrez90@gmail.com">sheikshabrez90@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linked}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div class="nav-links-container footer-nav">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 Shabrez G. All Rights Reserved.</p>
    </footer>
        </>
    )
}