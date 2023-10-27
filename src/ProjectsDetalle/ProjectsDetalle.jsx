import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "wouter";
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

  // Detect swipe gestures
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    
    // Set a threshold for the swipe to prevent accidental swipes
    const threshold = 25;

    if (deltaX > threshold) {
      // Swipe to the right (previous image)
      showPreviousImage();
    } else if (deltaX < -threshold) {
      // Swipe to the left (next image)
      showNextImage();
    }
  };

  // Attach touch event listeners to the image element
  useEffect(() => {
    const imageElement = document.querySelector('.proyecto-img');
    if (imageElement) {
      imageElement.addEventListener('touchstart', handleTouchStart);
      imageElement.addEventListener('touchend', handleTouchEnd);

      // Clean up event listeners when the component unmounts
      return () => {
        imageElement.removeEventListener('touchstart', handleTouchStart);
        imageElement.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [currentIndex]);


  useEffect(() => {
    if (!item) {
      // Handle the case where the segment does not match any items
      console.log("Item not found");
    }
  }, [item]);



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
    return <img onClick={handleImageClick} className='proyecto-img' src={item.imagenSrc[currentIndex]} alt={item.texto} />;
  };


  return (
    <div className="imagen-container-proyecto">
        <Header />
      <div className='imagen-container-proyecto-derecha'>
        <div className="imagen-container-proyecto-medio">
          {item ? (
            <div className="imagen-container-proyecto-medio-container">
              <div>
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
  </div>
  );
};

