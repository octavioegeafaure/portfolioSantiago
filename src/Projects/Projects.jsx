import React, { useEffect, useState } from 'react';
import './Projects.css'; // Create this CSS file for styling
import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import edificioPortada from "../../public/Images/edificioPortada.webp"
import intercambiadorPortada from "../../public/Images/intercambiadorPortada.webp"
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
    { id: 3, url:"building",texto: 'Building', imagenSrc: edificioPortada},
    { id: 4, url:"intermodal",texto: 'UNC Intermodal Station', imagenSrc: intercambiadorPortada },
    { id: 5, url:"void",texto: 'The Void Density',project:"",location:"No Context",year:"2022",status:"Project",sector:"Exploration", imagenSrc: [biblioteca, ]},    
  ];

  const handleMouseEnter = (imagenSrc) => {
    setHoverImagen(imagenSrc);
  };

  return (
    <div className="imagen-container">
      <div>
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