import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "wouter";
import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import biblioteca1 from "../../public/Images/julio2023biblioteca/ANAQUELESARRIBA-min.webp"
import biblioteca2 from "../../public/Images/julio2023biblioteca/ANAQUELESENTRADA-min.webp"
import biblioteca3 from "../../public/Images/julio2023biblioteca/AREADETRABAJO-min.webp"
import biblioteca4 from "../../public/Images/julio2023biblioteca/AXO-min.jpg"
import biblioteca5 from "../../public/Images/julio2023biblioteca/CORTE-FUGADO-min.jpg"
import biblioteca6 from "../../public/Images/julio2023biblioteca/CORTE-LONG-min.webp"
import biblioteca7 from "../../public/Images/julio2023biblioteca/FONDO-min.webp"
import biblioteca8 from "../../public/Images/julio2023biblioteca/LLEGADA-ESC-min.webp"
import biblioteca9 from "../../public/Images/julio2023biblioteca/PA-min.webp"
import biblioteca10 from "../../public/Images/julio2023biblioteca/PB-min.webp"
import biblioteca11 from "../../public/Images/julio2023biblioteca/RECEPCION-min.webp"
import biblioteca12 from "../../public/Images/julio2023biblioteca/RECEPCION2-min.webp"
import biblioteca13 from "../../public/Images/julio2023biblioteca/RECEPCIONDESDEARRIBA-min.webp"
import biblioteca14 from "../../public/Images/julio2023biblioteca/TERRAZA-min.webp"
import biblioteca15 from "../../public/Images/julio2023biblioteca/TERRAZA2-min.webp"
import biblioteca16 from "../../public/Images/julio2023biblioteca/VISTAENTREPISO-min.webp"
import edificioPortada from "../../public/Images/edificioPortada.webp"
import intercambiadorPortada from "../../public/Images/intercambiadorPortada.webp"
import { Header } from '../Header/Header';
import "./ProjectsDetalle.css"

  const items = [
    { id: 1, url:"housing",titulo: 'Minimun Housing',project:"",location:"Downtown Area, Córdoba, (Ar)",year:"2021",status:"Project",sector:"Housing", 
    imagenSrc: [housingTerrazaVacio] },
    { id: 2, url:"library",titulo: 'UNC Postgraduate Library',project:"",location:" Córdoba National University",year:"2023",status:"Project",sector:"Institutional", 
    imagenSrc: [biblioteca, biblioteca1,biblioteca2,biblioteca3,biblioteca4,biblioteca5,biblioteca6,biblioteca7,biblioteca8,biblioteca9,biblioteca10,biblioteca11,biblioteca12,biblioteca13,biblioteca14,biblioteca15,biblioteca16]},
    { id: 3, url:"building",titulo: 'Residential Building',project:"",location:"Downtown Area, Córdoba, (Ar)",year:"2021",status:"Project",sector:"Residential", 
    imagenSrc: [edificioPortada]},
    { id: 4, url:"intermodal",titulo: 'UNC Intermodal Station',project:"",location:"Córdoba National University",year:"2023",status:"Project",sector:"Intermodal Station", 
    imagenSrc: [intercambiadorPortada ]},
    { id: 5, url:"void",titulo: 'The Density in the Void',project:"",location:"No Context",year:"2022",status:"Project",sector:"Exploration", 
    imagenSrc: [biblioteca, ]},
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

