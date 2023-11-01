import { useEffect } from "react"
import { useState } from "react"
import { Banner } from "./Banner/Banner"
import { Header } from "./Header/Header"
import { motion } from "framer-motion"

import "./Home.css"
export const Home = () => {
  
const [loaderAnimationComplete, setLoaderAnimationComplete] = useState(false);

  useEffect(() => {
    // Use a setTimeout to mark the animation as complete
    setTimeout(() => {
      setLoaderAnimationComplete(true);
    }, 1000); // Adjust the duration based on your animation's duration
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
            transition={{ delay: 1, duration: 1.2 }}
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

      {/* Render Header and Banner components */}
      <Header className={`header ${loaderAnimationComplete ? 'animation-complete' : ''}`} />
      <Banner className={`banner ${loaderAnimationComplete ? 'animation-complete' : ''}`} />
    </div>
    
  )
}
