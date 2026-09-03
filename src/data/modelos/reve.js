import plantaBaja from "../../assets/images/modelos/reve/planta-baja.png";
import planta2 from "../../assets/images/modelos/reve/planta-2.png";
import planta3 from "../../assets/images/modelos/reve/planta-3.png";

import cochera from "../../assets/icons/modelos/parking.svg";
import bano from "../../assets/icons/modelos/bano.svg";
import social from "../../assets/icons/modelos/social.svg";
import patio from "../../assets/icons/modelos/patio.svg";
import cocina from "../../assets/icons/modelos/cocina.svg";
import sala from "../../assets/icons/modelos/sala.svg";
import comedor from "../../assets/icons/modelos/comedor.svg";
import lavadora from "../../assets/icons/modelos/lavadora.svg";
import cama from "../../assets/icons/modelos/cama.svg";
import regadera from "../../assets/icons/modelos/regadera.svg";
import lavanderia from "../../assets/icons/modelos/lavanderia.svg";
import terraza from "../../assets/icons/modelos/terraza.svg";

export const reveData = {
  title: "Modelo Revé",
  description:
    "Tres plantas que ofrecen mayor amplitud y versatilidad para la vida familiar. Revé cuenta con tres recámaras con baño completo, estancia, sala de juegos, doble terraza y cuarto de servicio.",
  niveles: [
    {
      titulo: "Primer Nivel:",
      image: plantaBaja,
      imageLabel: "Planta Baja",
      caracteristicas: [
        { label: "Cochera techada para 2 autos", icon: cochera },
        { label: "Medio baño", icon: bano },
        { label: "Área Social", icon: social },
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
        { label: "3 Baños completos", icon: regadera },
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
