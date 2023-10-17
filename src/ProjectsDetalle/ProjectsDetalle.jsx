import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "wouter";
import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import biblioteca1 from "../../public/Images/julio2023biblioteca/ANAQUELESARRIBA-min.jpg"
import biblioteca2 from "../../public/Images/julio2023biblioteca/ANAQUELESENTRADA-min.jpg"
// import biblioteca3 from "../../public/Images/julio2023bilioteca/AREADETRABAJO-min.jpg"
import edificioPortada from "../../public/Images/edificioPortada.webp"
import intercambiadorPortada from "../../public/Images/intercambiadorPortada.webp"
import { Header } from '../Header/Header';
import "./ProjectsDetalle.css"
  const items = [
    { id: 1, url:"housing",titulo: 'Minimun Housing',project:"",location:"Downtown Area, Córdoba, (Ar)",year:"2021",status:"Project",sector:"Housing", imagenSrc: [housingTerrazaVacio] },
    { id: 2, url:"library",titulo: 'UNC Postgraduate Library',project:"",location:" Córdoba National University",year:"2023",status:"Project",sector:"Institutional", imagenSrc: [biblioteca, biblioteca1,biblioteca2,biblioteca1]},
    { id: 3, url:"building",titulo: 'Residential Building',project:"",location:"Downtown Area, Córdoba, (Ar)",year:"2021",status:"Project",sector:"Residential", imagenSrc: [edificioPortada]},
    { id: 4, url:"intermodal",titulo: 'UNC Intermodal Station',project:"",location:"Córdoba National University",year:"2023",status:"Project",sector:"Intermodal Station", imagenSrc: [intercambiadorPortada ]},
    { id: 5, url:"void",titulo: 'The Void Density',project:"",location:"No Context",year:"2022",status:"Project",sector:"Exploration", imagenSrc: [biblioteca, ]},
  ];



export const ProjectsDetalle = () => {

  const [location, setLocation] = useLocation();
  const segment = location.substring(location.lastIndexOf('/') + 1);
  const item = items.find((item) => item.url === segment);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = item ? item.imagenSrc.length : 0;
  const currentImageNumber = currentIndex + 1;


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

