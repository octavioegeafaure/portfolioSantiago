import { useEffect } from "react"
import { useState } from "react"
import { Banner } from "./Banner/Banner"
import { Header } from "./Header/Header"
import { motion } from "framer-motion"

import "./Home.css"
export const Home = () => {
  
const [loaderAnimationComplete, setLoaderAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaderAnimationComplete(true);
    }, 2000); 
  }, []);

  return (
    <div className="home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.9, duration: 2 }}
        variants={{
          visible: { opacity: 0 },
          hidden: { opacity: 1 },
        }}
        className={`home-loader ${loaderAnimationComplete ? 'animation-complete' : ''}`}
      >
        <div className="home-loader-texto">
          <div className="home-loader-overflow">
            <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1.2 }}
            variants={{
            visible: { y: -50, opacity: 1 },
            hidden: { y: 0, opacity: 1 },
            }}
          >
          santiago espeche
          </motion.p> 
          </div>

        </div>

      </motion.div>

      
      <Header className={`header ${loaderAnimationComplete ? 'animation-complete' : ''}`} />
      <Banner className={`banner ${loaderAnimationComplete ? 'animation-complete' : ''}`} />
    </div>
    
  )
}
