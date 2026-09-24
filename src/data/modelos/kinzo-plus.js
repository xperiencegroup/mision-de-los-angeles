import plantaBaja from "../../assets/images/modelos/kinzo-plus/planta-baja.png";
import plantaAlta from "../../assets/images/modelos/kinzo-plus/planta-alta.png";

import cochera from "../../assets/icons/modelos/parking.svg";
import bano from "../../assets/icons/modelos/bano.svg";
import patio from "../../assets/icons/modelos/patio.svg";
import cocina from "../../assets/icons/modelos/cocina.svg";
import sala from "../../assets/icons/modelos/sala.svg";
import comedor from "../../assets/icons/modelos/comedor.svg";
import lavadora from "../../assets/icons/modelos/lavadora.svg";
import cama from "../../assets/icons/modelos/cama.svg";

export const kinzoPlusData = {
  title: "Modelo Kinzo Plus",
  subtitle: "Para toda la vida",
  description:
    "Este nombre viene de una palabra que en húngaro quiere decir tesoro, lo relacionamos con la idea de que al encontrar esta propiedad encuentras algo único, de calidad, que no es fácil de encontrar pero que te va a durar toda la vida, un tesoro.",
  secondDescription:
    "Dos plantas diseñadas para disfrutar cada espacio en familia. \n\n Kinzo integra áreas sociales amplias en la planta baja y tres recámaras en el segundo nivel, cada una con baño completo, además de estancia y lavandería. ",
  niveles: [
    {
      titulo: "Primer Nivel:",
      image: plantaBaja,
      imageLabel: "Planta Baja",
      caracteristicas: [
        { label: "Cochera techada para 2 autos", icon: cochera },
        { label: "Medio baño", icon: bano },
        { label: "Patio", icon: patio },
        { label: "Cocina", icon: cocina },
        { label: "Sala", icon: sala },
        { label: "Comedor", icon: comedor },
      ],
    },
    {
      titulo: "Segundo Nivel:",
      image: plantaAlta,
      imageLabel: "2a Planta",
      caracteristicas: [
        { label: "Estancia", icon: sala },
        { label: "Lavandería", icon: lavadora },
        {
          label: "Recámara principal con walk-in closet y baño completo",
          icon: cama,
        },
        {
          label: "2 recámaras secundarias, cada una con baño completo",
          icon: cama,
        },
      ],
    },
  ],
};
