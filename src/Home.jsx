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
    }, 0); 
  }, []);

  return (
    <div className="home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.25 }}
        variants={{
          visible: { opacity: 0 },
          hidden: { opacity: 1 },
        }}
        className={`home-loader ${loaderAnimationComplete ? 'animation-complete' : ''}`}
      >
        <div className="home-loader-texto">
          <div className="home-loader-overflow">
            <motion.p
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
