import { Projects } from "../components/Projects"
import {Profile} from "../components/Profile"
import {AboutMe} from "../components/AboutMe"
import {Experience} from "../components/Experience"
import {Contact} from "../components/Contact"
import Navbar from "../components/Navbar"

export const Main = () => {
    return(
        <div>
        <Navbar/>
          <Profile/>
          <AboutMe/>
          <Experience/>  
          <Projects/> 
          <Contact/>
        </div>
    )
}