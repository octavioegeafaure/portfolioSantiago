import { Header } from "../Header/Header"
import "./Footer.css"


export const Footer = () => {
  return (
    <div className="footer">
        <Header />
        <div className="footer-container">
            <div >
                <p>santiagoespeche@gmail.com</p>
                <p>Instagram</p> 
            </div>
            <div className="footer-container-ciudad">
                <div >
                    <p>Córdoba, Argentina</p>
                </div>
                <div >
                    <p>© 2023</p> 
                </div>  
            </div>
        </div>
    </div>
  )
}
