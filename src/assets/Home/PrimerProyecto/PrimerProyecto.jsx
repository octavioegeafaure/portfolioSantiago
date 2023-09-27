import "./PrimerProyecto.css"
import banner from "../../../../public/Images/tallermura.png"
import taller from "../../../../public/Images/tallertissot.png"
import { motion } from "framer-motion"

const PrimerProyecto = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.4,
        }}    
        className="primer-proyecto">
        <div className="primer-proyecto-container">
            <img
            src={taller}
            className="primer-proyecto-container-imagen tallerTissot"
            />
            <div >
                <p className="primer-proyecto-container-titulo">Taller Tissot</p>
                <p className="primer-proyecto-container-subtitulo">2021</p>
            </div>
        </div>
        <div className="primer-proyecto-container">
            <img
            src={banner}
            className="primer-proyecto-container-imagen tallerMura"
            />
            <div >
                <p className="primer-proyecto-container-titulo">Taller Mura</p>
                <p className="primer-proyecto-container-subtitulo">2021</p>
            </div>
        </div>
    </motion.div>      
  )
}

export default PrimerProyecto