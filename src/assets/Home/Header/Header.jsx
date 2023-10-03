import "./Header.css"
import { motion } from "framer-motion";
import { useRef } from "react";


export const Header = () => {

  const navRef = useRef();
  const mostrarNavBar = () => {
    navRef.current.classList.toggle("responsive-header");
  };
  return (
    <div className="header">
      <motion.div 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0,
        }}
        className="header-motion"
      > 
        <div>
            <h1 className="header-nombre">santiago espeche</h1>
        </div>

        
          <div className="header-menu">
              <motion.h4 className="header-menu-proyectos"       
              >projects,
              </motion.h4>
              {/* <h4 className="header-menu-eliminarcoma">,</h4> */}
              <motion.h4
              className="header-menu-about">about,</motion.h4>
              <motion.h4
              className="header-menu-about">contact.</motion.h4>

          </div>
        
      </motion.div>
    </div>
  )
}
