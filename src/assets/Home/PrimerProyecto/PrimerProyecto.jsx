import "./PrimerProyecto.css"
import banner from "../../../../public/Images/tallermura.png"
import taller from "../../../../public/Images/tallertissot.png"
import intercambiador from "../../../../public/Images/intercambiador.jpg"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const PrimerProyecto = () => {    
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()
    
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
  return (
        <div
        ref={ref}
        className="primer-proyecto">
            <motion.div
            variants={{
                hidden: {opacity:0},
                visible: {opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.3,
            }}
            >
            <Cards img={taller}clase={""}titulo={"Taller Mediterraneo"}anio={2021}/>
            </motion.div>

            <motion.div 
            variants={{
                hidden: {opacity:0},
                visible: {opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.7,
            }}
            >
            <Cards img={intercambiador}clase={""}titulo={"Intercambiador Urbano"}anio={2023}/>
            </motion.div>

            <motion.div
            variants={{
                hidden: {opacity:0},
                visible: {opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.4,
            }}           
            ><Cards img={banner}clase={""}titulo={"Taller Mura"}anio={2021}/>
            </motion.div>
        </div>
        
  )
}
const Cards = ({img, clase,titulo,anio}) => {

    return (
        <motion.div
        
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{
        // ease: "easeInOut",
        // duration: duration,
        // delay: delay,
        // }}
        className="primer-proyecto-container">
            <img
            src={img}
            className={`primer-proyecto-container-imagen ${clase}`} 
            />
            <div >
                <p className="primer-proyecto-container-titulo">{titulo}</p>
                <p className="primer-proyecto-container-subtitulo">{anio}</p>
            </div>
        </motion.div>          
    )
}
export default PrimerProyecto
