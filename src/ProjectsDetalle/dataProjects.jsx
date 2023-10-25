import housingTerrazaVacio from "../../public/Images/housingTerrazaVacio.webp"
import biblioteca from "../../public/Images/bibliotecaPortada.webp"
import biblioteca1 from "../../public/Images/julio2023biblioteca/ANAQUELESARRIBA-min.webp"
import biblioteca2 from "../../public/Images/julio2023biblioteca/ANAQUELESENTRADA-min.webp"
import biblioteca3 from "../../public/Images/julio2023biblioteca/AREADETRABAJO-min.webp"
import biblioteca4 from "../../public/Images/julio2023biblioteca/FONDO-min.webp"
import biblioteca5 from "../../public/Images/julio2023biblioteca/RECEPCION-min.webp"
import biblioteca6 from "../../public/Images/julio2023biblioteca/RECEPCION2-min.webp"
import biblioteca7 from "../../public/Images/julio2023biblioteca/RECEPCIONDESDEARRIBA-min.webp"
import biblioteca8 from "../../public/Images/julio2023biblioteca/LLEGADA-ESC-min.webp"
import biblioteca9 from "../../public/Images/julio2023biblioteca/TERRAZA-min.webp"
import biblioteca10 from "../../public/Images/julio2023biblioteca/VISTAENTREPISO-min.webp"
import biblioteca11 from "../../public/Images/julio2023biblioteca/PA-min.webp"
import biblioteca12 from "../../public/Images/julio2023biblioteca/PB-min.webp"
import biblioteca13 from "../../public/Images/julio2023biblioteca/CORTE-LONG-min.webp"
import biblioteca14 from "../../public/Images/julio2023biblioteca/CORTE-FUGADO-min.webp"
import biblioteca15 from "../../public/Images/julio2023biblioteca/AXO-min.webp"
import housing1 from "../../public/Images/julio2021/1.webp"
import housing2 from "../../public/Images/julio2021/2.webp"
import housing3 from "../../public/Images/julio2021/AXO.webp"
import housing4 from "../../public/Images/julio2021/P1.webp"
import housing5 from "../../public/Images/julio2021/p2.webp"
import housing6 from "../../public/Images/julio2021/p3.webp"
import housing7 from "../../public/Images/julio2021/p4.webp"
import housing8 from "../../public/Images/julio2021/p5.webp"
import housing9 from "../../public/Images/julio2021/p6.webp"
import housing10 from "../../public/Images/julio2021/p7.webp"
import housing11 from "../../public/Images/julio2021/p8.webp"
import housing12 from "../../public/Images/julio2021/p9.webp"
import housing13 from "../../public/Images/julio2021/p10.webp"
import housing14 from "../../public/Images/julio2021/p11.webp"
import housing15 from "../../public/Images/julio2021/p13.webp"
import edificioPortada from "../../public/Images/edificioPortada.webp"
import intercambiadorPortada from "../../public/Images/intercambiadorPortada.webp"

export const items = [
    { id: 1, url:"housing",titulo: 'Minimum Housing',project:"",location:"Downtown Area, Córdoba, (Ar)",year:"2021",status:"Project",sector:"Housing", 
    imagenSrc: [housingTerrazaVacio,housing1,housing2,housing3,housing4,housing5,housing6,housing7,housing8,housing9,housing10,housing11,housing12,housing13,housing14,housing15] },
    { id: 2, url:"library",titulo: 'UNC Postgraduate Library',project:"",location:" Córdoba National University",year:"2023",status:"Project",sector:"Institutional", 
    imagenSrc: [biblioteca, biblioteca1,biblioteca2,biblioteca3,biblioteca4,biblioteca5,biblioteca6,biblioteca7,biblioteca8,biblioteca9,biblioteca10,biblioteca11,biblioteca12,biblioteca13,biblioteca14,biblioteca15]},
    { id: 3, url:"building",titulo: 'Residential Building',project:"",location:"Downtown Area, Córdoba, (Ar)",year:"2021",status:"Project",sector:"Residential", 
    imagenSrc: [edificioPortada]},
    { id: 4, url:"intermodal",titulo: 'UNC Intermodal Station',project:"",location:"Córdoba National University",year:"2023",status:"Project",sector:"Intermodal Station", 
    imagenSrc: [intercambiadorPortada ]},
    { id: 5, url:"void",titulo: 'The Density in the Void',project:"",location:"No Context",year:"2022",status:"Project",sector:"Exploration", 
    imagenSrc: [biblioteca, ]},
  ];