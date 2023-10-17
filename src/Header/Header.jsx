import "./Header.css"
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";


export const Header = () => {

  const navRef = useRef();
  const mostrarNavBar = () => {
    navRef.current.classList.toggle("responsive-header");
  };
  return (
    <div className="header">
      <motion.div 
        // initial={{ y: 50 }}
        // animate={{ y: 0 }}
        transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0,
        }}
        className="header-motion"
      > 
        <div>
          <Link href="/portfolioSantiago/">
            <h1 className="header-nombre">santiago espeche</h1>
          </Link>
        </div>
          <div className="header-menu">
            <Link href="/portfolioSantiago/projects/">
              <motion.h4 className="header-menu-proyectos"       
              >projects
              </motion.h4>              
            </Link>

              {/* <h4 className="header-menu-eliminarcoma">,</h4> */}
              <motion.h4
              className="header-menu-about">about</motion.h4>
              <Link href="/portfolioSantiago/contact">
                <motion.h4
                className="header-menu-about">
                  contact
                </motion.h4>
              </Link>
          </div>
        
      </motion.div>
    </div>
  )
}
