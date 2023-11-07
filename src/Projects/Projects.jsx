import React, { useEffect, useState } from 'react';
import './Projects.css'; // Create this CSS file for styling
import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import edificioPortada from "../../public/Images/edificioPortada.webp"
import intercambiadorPortada from "../../public/Images/intercambiadorPortada.webp"
import mercadoPortada from "../../public/Images/mercadoPortada.webp"
import densidadVacioPortada from "../../public/Images/densidadVacioPortada.webp"
import duplexPortada from "../../public/Images/duplexPortada.webp"
import { Header } from '../Header/Header';
import { Link } from 'wouter';

export const Projects = () => {
  const [hoverImagen, setHoverImagen] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;


  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  
  const items = [
    { id: 1, url:"housing",texto: 'Minimum Housing', imagenSrc: housingTerrazaVacio,className:"custom-image" },
    { id: 2, url:"library",texto: 'UNC Postgraduate Library', imagenSrc: biblioteca },
    { id: 3, url:"building",texto: 'Residential Building', imagenSrc: edificioPortada},
    { id: 4, url:"intermodal",texto: 'UNC Intermodal Station', imagenSrc: intercambiadorPortada },
    { id: 5, url:"creativemarket",texto: 'Creative Industries Market',imagenSrc: [mercadoPortada]},    
    { id: 6, url:"void",texto: 'The Density in the Void',imagenSrc: [densidadVacioPortada, ]},
    { id: 7, url:"duplex",texto: 'Duplex',imagenSrc: [duplexPortada, ]},
  ];

  const handleMouseEnter = (imagenSrc) => {
    setHoverImagen(imagenSrc);
  };

  return (
    <div className="imagen-container">
      <div className="imagen-container-header">
       <Header /> 
      </div>
      
      <div className='imagen-container-derecha'>
        <div className="imagen-container-list">
        {items.map((item) => (
          <Link key={item.id} href={`/portfolioSantiago/projects/${item.url}`}>
          <div
            key={item.id}
            className="imagen-container-list-item"
            onMouseEnter={() => handleMouseEnter(item.imagenSrc)}
          >
            {item.texto}
          </div>
          </Link>
        ))}
        
        </div>
        {width > breakpoint ? 
        <div className='custom-img'>
          
          {hoverImagen  && <img  src={hoverImagen } className="custom-image"alt="Hovered Item" />}
        </div>
          : null}
        
      </div>

    </div>
  );
}