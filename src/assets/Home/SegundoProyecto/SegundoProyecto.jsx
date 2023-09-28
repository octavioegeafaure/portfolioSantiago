import "./SegundoProyecto.css"
import { motion, useAnimation, useInView } from 'framer-motion'
import biblioteca from "../../../../public/Images/biblioteca.jpg"
import taller from "../../../../public/Images/tallertissot.png"
import { useEffect, useRef } from "react"

const SegundoProyecto = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
  return (
    <div ref={ref}className='segundo-proyecto'>
        <motion.div
            variants={{
                hidden: {opacity:0},
                visible: {opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
            ease: "easeInOut",
            duration: 0.4,
            delay: 0.3,
            }}       
        >
            <Cards img={biblioteca}clase={""}titulo={"Biblioteca Posgrado FAUD"}anio={2023}/>
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
            duration: 0.4,
            delay: 0.5,
            }}         
        >
            <Cards img={taller}clase={""}titulo={"Taller Mediterraneo"}anio={2021}/>
        </motion.div>
    </div>
  )
}
const Cards = ({img, clase,titulo,anio}) => {

    return (
        <motion.div
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
export default SegundoProyecto