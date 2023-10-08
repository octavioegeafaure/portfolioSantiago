import React, { useState } from 'react';
import './Projects.css'; // Create this CSS file for styling
import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import edificioPortada from "../../public/Images/edificioPortada.webp"
import intercambiadorPortada from "../../public/Images/intercambiadorPortada.webp"

import { Header } from '../Header/Header';

export const Projects = () => {
  const [hoverImagen, setHoverImagen] = useState(null);


  const items = [
    { id: 1, texto: 'Housing', imagenSrc: housingTerrazaVacio },
    { id: 2, texto: 'UNC Postgraduate Library', imagenSrc: biblioteca },
    { id: 3, texto: 'Building', imagenSrc: edificioPortada},
    { id: 4, texto: 'UNC Intermodal Station', imagenSrc: intercambiadorPortada },
    // { id: 5, text: 'Biblioteca Posgrado FAUD', imageSrc: biblioteca },
    // { id: 6, text: 'Biblioteca Posgrado FAUD', imageSrc: biblioteca },
    // { id: 7, text: 'Biblioteca Posgrado FAUD', imageSrc: biblioteca },

    
    // Add more items as needed
  ];

  const handleMouseEnter = (imagenSrc) => {
    setHoverImagen(imagenSrc);
  };

  return (
    <div className="imagen-container">
      <Header />
      <div className='imagen-container-derecha'>
        <div className="imagen-container-list">
        {items.map((item) => (
          <div
            key={item.id}
            className="imagen-container-list-item"
            onMouseEnter={() => handleMouseEnter(item.imagenSrc)}
          >
            {item.texto}
          </div>
        ))}
      </div>
      <div className="custom-image">
        {hoverImagen  && <img src={hoverImagen } alt="Hovered Item" />}
      </div>
      </div>

    </div>
  );
};

