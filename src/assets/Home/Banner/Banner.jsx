import "./Banner.css"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import banner from "../../../../public/Images/tallermura.png"
import taller from "../../../../public/Images/tallertissot.png"
import intercambiador from "../../../../public/Images/intercambiador.jpg"
import filtro from "../../../../public/Images/filtro.jpg"




export const Banner = () => {
  const [images, setImages] = useState([
  banner,  
  taller,
  filtro,
  intercambiador,
  ])
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

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

