import "./Banner.css"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import densidadVacio from "../../public/Images/densidadVacioPortada.webp"
import duplex from "../../public/Images/duplexPortada.webp"
import edificio from "../../public/Images/edificioPortada.webp"
import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import intercambiador from "../../public/Images/intercambiadorPortada.webp"
import mercado from "../../public/Images/mercadoPortada.webp"


export const Banner = () => {
  const [images, setImages] = useState([
    biblioteca,  
    densidadVacio,
    duplex,
    edificio,
    housingTerrazaVacio,
    mercado,
    intercambiador,
  ])
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); 

    return () => {
      clearInterval(interval); 
    };
  }, [images]);

  // botonera para pasar de imagenes
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="banner">
      <div className="image-container">
        <img  src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="image-container-img" />
      </div>
    </div>
  );
}

