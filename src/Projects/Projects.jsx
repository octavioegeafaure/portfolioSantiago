import React, { useState } from 'react';
import './Projects.css'; // Create this CSS file for styling
import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import edificioPortada from "../../public/Images/edificioPortada.webp"
import intercambiadorPortada from "../../public/Images/intercambiadorPortada.webp"

import { Header } from '../Header/Header';

export const Projects = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const items = [
    { id: 1, text: 'Housing', imageSrc: housingTerrazaVacio },
    { id: 2, text: 'UNC Postgraduate Library', imageSrc: biblioteca },
    { id: 3, text: 'Building', imageSrc: edificioPortada},
    { id: 4, text: 'UNC Intermodal Station', imageSrc: intercambiadorPortada },
    // { id: 5, text: 'Biblioteca Posgrado FAUD', imageSrc: biblioteca },
    // { id: 6, text: 'Biblioteca Posgrado FAUD', imageSrc: biblioteca },
    // { id: 7, text: 'Biblioteca Posgrado FAUD', imageSrc: biblioteca },

    
    // Add more items as needed
  ];

  const handleMouseEnter = (imageSrc) => {
    setHoveredImage(imageSrc);
  };

  return (
    <div className="container">
      <Header />
      <div className="list">
        {items.map((item) => (
          <div
            key={item.id}
            className="list-item"
            onMouseEnter={() => handleMouseEnter(item.imageSrc)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="image">
        {hoveredImage && <img src={hoveredImage} alt="Hovered Item" />}
      </div>
    </div>
  );
};

