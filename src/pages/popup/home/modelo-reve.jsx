import { useEffect } from "react";
import { useSearchParams } from "react-router";
import closeIcon from "../../../assets/icons/close.svg";
import plantaBaja from "../../../assets/images/modelos/reve/planta-baja.png";
import planta2 from "../../../assets/images/modelos/reve/planta-2.png";
import planta3 from "../../../assets/images/modelos/reve/planta-3.png";

// íconos
import cochera from "../../../assets/icons/modelos/parking.svg";
import bano from "../../../assets/icons/modelos/bano.svg";
import social from "../../../assets/icons/modelos/social.svg";
import patio from "../../../assets/icons/modelos/patio.svg";
import cocina from "../../../assets/icons/modelos/cocina.svg";
import sala from "../../../assets/icons/modelos/sala.svg";
import comedor from "../../../assets/icons/modelos/comedor.svg";
import lavadora from "../../../assets/icons/modelos/lavadora.svg";
import cama from "../../../assets/icons/modelos/cama.svg";
import regadera from "../../../assets/icons/modelos/regadera.svg";
import lavanderia from "../../../assets/icons/modelos/lavanderia.svg";
import terraza from "../../../assets/icons/modelos/terraza.svg";
import { ModeloCarousel } from "../../../components/carousel/modelo-carousel";

const CARACTERISITCAS = {
  "primer-nivel": [
    { label: "Cochera techada para 2 autos", icon: cochera },
    { label: "Medio baño", icon: bano },
    { label: "Área Social", icon: social },
    { label: "Patio", icon: patio },
    { label: "Cocina", icon: cocina },
    { label: "Sala", icon: sala },
    { label: "Comedor", icon: comedor },
  ],
  "segundo-nivel": [
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
  "tercer-nivel": [
    { label: "Sala de juegos", icon: sala },
    { label: "Doble terraza", icon: terraza },
    { label: "Cuarto de servicio", icon: lavanderia },
    { label: "Baño completo", icon: bano },
  ],
};

export default function ModeloReve() {
  const [, setSearchParams] = useSearchParams();

  const handleCloseModal = () => {
    setSearchParams({});
  };

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  const niveles = [
    {
      titulo: "Primer Nivel:",
      image: plantaBaja,
      imageLabel: "Planta Baja",
      caracteristicas: CARACTERISITCAS["primer-nivel"],
    },
    {
      titulo: "Segundo Nivel:",
      image: planta2,
      imageLabel: "2a Planta",
      caracteristicas: CARACTERISITCAS["segundo-nivel"],
    },
    {
      titulo: "Tercer Nivel:",
      image: planta3,
      imageLabel: "3er Planta",
      caracteristicas: CARACTERISITCAS["tercer-nivel"],
    },
  ];

  const slides = niveles.map((nivel) => (
    <div
      key={nivel.titulo}
      className="flex flex-col md:flex-row w-full h-full justify-center items-center pr-[5px]"
    >
      {/* Imagen */}
      <div className="flex flex-col items-center">
        <div className="relative w-[400px] h-[500px]">
          <img
            src={nivel.image}
            alt={`Modelo Revé Plus ${nivel.imageLabel}`}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Características */}
      <div className="flex flex-col grow max-w-[650px] h-full px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-verde-confianza">
        <h3 className="subtitulos font-woodland font-bold text-verde-dinamico">
          {nivel.titulo}
        </h3>

        <ul className="flex flex-col gap-[20px]">
          {nivel.caracteristicas.map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-[20px]">
                <div className="shrink-0 flex justify-center items-center size-[60px] rounded-t-[30px] bg-beige-hogar">
                  <img src={item.icon} alt={`${item.icon}-image`} />
                </div>
                <p className="parrafos text-beige-hogar">{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="fixed inset-0 z-50 flex justify-center w-full min-h-fit bg-black/30 backdrop-blur-sm overflow-y-auto">
      <div className="relative flex flex-col w-full min-h-lvh p-[60px] gap-[17px] bg-beige-hogar overflow-y-auto">
        {/* Boton de cerrar */}
        <button
          onClick={handleCloseModal}
          className="absolute right-[14px] top-[14px] md:right-[38px] md:top-[36px] flex justify-center items-center size-[42px] md:size-[60px] hover:cursor-pointer bg-celeste-bienestar"
        >
          <img src={closeIcon} className="size-[30px] md:size-[45px]" />
        </button>

        {/* Texts */}
        <div className="flex flex-col w-full h-fit gap-5">
          <h2 className="titulos text-center font-woodland font-bold text-verde-confianza">
            Modelo Revé Plus
          </h2>
          <p className="parrafos text-center text-gris-profundo">
            Tres plantas que ofrecen mayor amplitud y versatilidad para la vida
            familiar. Revé cuenta con tres recámaras con baño completo,
            estancia, sala de juegos, doble terraza y cuarto de servicio.
          </p>

          <div className="flex w-full h-full overflow-hidden">
            <ModeloCarousel slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}
