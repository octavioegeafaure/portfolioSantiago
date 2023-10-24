import { Header } from "../Header/Header"
import "./About.css"

export const About = () => {
  return (
    <div className="about">
        <div className="about-header">
            <Header />
        </div>
        <div className="about-texto">
            <h5 className="about-texto-h5">
            Santiago Espeche is an architecture student at the 
            National University of Córdoba in Argentina. Throughout 
            his academic and semi-professional journey, he has undertaken 
            collaborative, partnership, and independent project development. 
            These projects encompass a range of scales and programs, 
            including single-family housing, multi-family housing, 
            commercial spaces, institutional buildings, public spaces, 
            and urban masterplans. He has participated in both local and 
            national competitions. Currently, his interests are focused 
            on the development of medium and large-scale projects.    
            </h5>

        </div>
    </div>
  )
}
