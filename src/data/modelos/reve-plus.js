import plantaBaja from "../../assets/images/modelos/reve-plus/planta-baja.png";
import planta2 from "../../assets/images/modelos/reve-plus/planta-2.png";
import planta3 from "../../assets/images/modelos/reve-plus/planta-3.png";

import cochera from "../../assets/icons/modelos/parking.svg";
import bano from "../../assets/icons/modelos/bano.svg";
import patio from "../../assets/icons/modelos/patio.svg";
import cocina from "../../assets/icons/modelos/cocina.svg";
import sala from "../../assets/icons/modelos/sala.svg";
import comedor from "../../assets/icons/modelos/comedor.svg";
import lavadora from "../../assets/icons/modelos/lavadora.svg";
import cama from "../../assets/icons/modelos/cama.svg";
import lavanderia from "../../assets/icons/modelos/lavanderia.svg";
import terraza from "../../assets/icons/modelos/terraza.svg";

export const revePlusData = {
  title: "Modelo Revé Plus",
  subtitle: "Sueños Tangibles",
  description:
    "Inspirados en palabras del francés y el vasco que significan “sueño”, estos nombres representan una visión que va más allá de construir hogares. \n Una idea que refleja la esencia de la desarrolladora: crear mucho más que espacios para vivir, convertir proyectos excepcionales en el lugar donde los sueños toman forma y se hacen realidad.",
  secondDescription:
    "Tres plantas que ofrecen mayor amplitud y versatilidad para la vida familiar. \n\n Revé cuenta con tres recámaras con baño completo, estancia, sala de juegos, doble terraza y cuarto de servicio.",
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
      image: planta2,
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
    {
      titulo: "Tercer Nivel:",
      image: planta3,
      imageLabel: "3er Planta",
      caracteristicas: [
        { label: "Sala de juegos", icon: sala },
        { label: "Doble terraza", icon: terraza },
        { label: "Cuarto de servicio", icon: lavanderia },
        { label: "Baño completo", icon: bano },
      ],
    },
  ],
};
