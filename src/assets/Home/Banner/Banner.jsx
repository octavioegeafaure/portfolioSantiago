import "./Banner.css"
import { motion } from "framer-motion"


const titulo = [
  "Portfolio Web",
  "Arquitectónico",
]

export const Banner = () => {
  return (
    <div className="banner">
        <MaskText />
        <div className="banner-end">
        </div>
    </div>
  )
}

export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.7, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }



  return(
    <div className="efectos">
      {
        titulo.map( (phrase, index) => {
          return <div key={index} className="banner-titulo">
            <motion.h1 className="banner-titulo-arquitecto"custom={index} variants={animation} initial="initial" animate="enter">{phrase}</motion.h1>
          </div>
        })
      }
    </div>
  )
}