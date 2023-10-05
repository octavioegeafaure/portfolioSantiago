
import { Link } from "wouter";
import { Header } from "../Header/Header"
import "./Footer.css"


export const Footer = () => {
  return (
    <div className="footer">
        <Header />
        <div className="footer-container">
            <div className="footer-container-a">
                <a href="mailto: santiagoespeche@gmail.com">
                    <p>santiagoespeche@gmail.com</p>
                </a>
                <a target="_blank" rel="noreferrer" href={`https://www.instagram.com/espechesanti/`}>
                    <p>instagram</p> 
                </a>
            </div>
            <div className="footer-container-ciudad">
                <div >
                    <p>córdoba, argentina</p>
                </div>
                <div >
                    <p>© 2023</p> 
                </div>  
            </div>
        </div>
    </div>
  )
}
