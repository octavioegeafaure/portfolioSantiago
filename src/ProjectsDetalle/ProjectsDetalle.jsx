import React, { useState } from 'react';
import { useLocation } from "wouter";
import { AnimatePresence, motion } from 'framer-motion';
import {items} from './dataProjects'
import { Header } from '../Header/Header';
import "./ProjectsDetalle.css"



export const ProjectsDetalle = () => {

  const [location, setLocation] = useLocation();
  const segment = location.substring(location.lastIndexOf('/') + 1);
  const item = items.find((item) => item.url === segment);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = item ? item.imagenSrc.length : 0;
  const currentImageNumber = currentIndex + 1;
  const [touchStartX, setTouchStartX] = useState(null);
  const imageInfo = item ? item.imagenSrc[currentIndex] : null;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [zIndex, setZIndex] = useState(1); // Initial z-index value
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  const toggleDescriptionExpansion = () => {
    setDescriptionExpanded((prevExpanded) => !prevExpanded);
  };
  // Detect swipe gestures
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return; // Prevent null reference

    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    // Set a threshold for the swipe to prevent accidental swipes
    const threshold = 50;

    if (deltaX > threshold) {
      // Swipe to the right (previous image)
      showPreviousImage();
    } else if (deltaX < -threshold) {
      // Swipe to the left (next image)
      showNextImage();
    }

    setTouchStartX(null); // Reset the start position
  };

  const showPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentIndex < item.imagenSrc.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // If it's the last image, reset the index to start again
      setCurrentIndex(0);
    }
  };
    const handleImageClick = (event) => {
    const image = event.target;
    const clickX = event.nativeEvent.offsetX; // Get the x-coordinate of the click relative to the image.
    const imageWidth = image.width;
    const halfWidth = imageWidth / 2;

    if (clickX < halfWidth) {
      // Clicked on the left half of the image
      showPreviousImage();
    } else {
      // Clicked on the right half of the image
      showNextImage();
    }
  };
  const updateImage = () => {
    if (imageInfo) {
    const { src, className } = imageInfo;
    return (
       <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleImageClick}
        className={`proyecto-img ${className}`}
        src={src}
        alt={item.texto}
      /> 
      

    );
  }
  };
  const detectBullets = (text) => {
    // Assuming that bullet points are lines starting with '-'
    const lines = text.split('\n');
    const bulletRegex = /^\s*-/;

    return lines.map((line, index) => {
      const isBullet = bulletRegex.test(line);
      return isBullet ? <li key={index}>{line.replace(bulletRegex, '').trim()}</li> : <p key={index}>{line}</p>;
    });
  };  

  return (
    <div className="imagen-container-proyecto">
        <Header />
      <div className='imagen-container-proyecto-derecha'>
        <div className="imagen-container-proyecto-medio">
          {item ? (
            <div className="imagen-container-proyecto-medio-container">
              <div className="imagen-container-proyecto-medio-container-caracteristicas">
                <p className='imagen-container-proyecto-medio-container-titulo'>{item.titulo}</p>
                <div className="imagen-container-proyecto-medio-container-unidades">
                  <div className="imagen-container-proyecto-medio-container-unidades-p">
                    <p>Project</p>
                    <p>Location</p>
                    <p>Year</p>
                    <p>Status</p>
                    <p>Sector</p>
                  </div>
                  <div className="imagen-container-proyecto-medio-container-unidades-p info">
                    <p>{item.titulo}</p>
                    <p>{item.location}</p>
                    <p>{item.year}</p>
                    <p>{item.status}</p>
                    <p>{item.sector}</p>
                  </div>
                </div>
              {/* <p>back to projects</p>  */}
              </div>
              
            </div>
            ):null}
        </div>
        <div className="imagen-container-proyecto-derecha-imagen">
          {/* logica para cuando este en la url y hago comparacion  */}
          {item ? (
          <div >

            <div className='imagen-container-proyecto-derecha-imagen-img'>
              
              {updateImage()}    
                <div className='imagen-container-proyecto-derecha-imagen-img-botones'>
                {/* <button onClick={showPreviousImage}>{"<"}</button> */}
                <p>{currentImageNumber} / {totalImages}</p>
                {/* <button onClick={showNextImage}>{">"}</button> */}
            </div>          
            </div>
          </div>
          ) : (
          <p>Item not found</p>
          )}
        </div>
      </div>
      <div className={`imagen-container-proyecto-description ${descriptionExpanded ? 'expanded' : ''}`} onClick={toggleDescriptionExpansion}>
        <div className="imagen-container-proyecto-description-container">
          <p className="imagen-container-proyecto-description-container-rotate">Description</p>
          {item && item.description ? (
            item.description.useBullets ? (
              <ul>
                {detectBullets(item.description.content.join('\n'))}
              </ul>
            ) : (
              <p>{item.description.content ? item.description.content.join('\n') : ''}</p>
            )
          ) : (
            <p>Item description not available</p>
          )}
        </div>
      </div>
      </div>
   
 
  );
};

