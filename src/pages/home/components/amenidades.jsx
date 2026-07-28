import { useRef, useState } from "react";
import { Carousel } from "../../../components/carousel/Carousel";

// Images
import albercaImage from "../../../assets/images/amenidades/alberca.jpg";
import casaClubImage from "../../../assets/images/amenidades/casa.jpg";
import parkingImage from "../../../assets/images/amenidades/parking.jpg";
import parqueImage from "../../../assets/images/amenidades/park.jpg";
import asadorImage from "../../../assets/images/amenidades/asador.jpg";
import pistaImage from "../../../assets/images/amenidades/pista.jpg";
import canchaImage from "../../../assets/images/amenidades/cancha.jpg";
import gymImage from "../../../assets/images/amenidades/gym.jpg";
import yogaImage from "../../../assets/images/amenidades/yoga.jpg";
import petImage from "../../../assets/images/amenidades/pet.jpg";

// Icons
import alberca from "../../../assets/icons/amenidades/pool.svg";
import casaClub from "../../../assets/icons/amenidades/club.svg";
import parking from "../../../assets/icons/amenidades/parking.svg";
import parque from "../../../assets/icons/amenidades/park.svg";
import asador from "../../../assets/icons/amenidades/asador.svg";
import pista from "../../../assets/icons/amenidades/vita-pista.svg";
import cancha from "../../../assets/icons/amenidades/ball.svg";
import gym from "../../../assets/icons/amenidades/gym.svg";
import yoga from "../../../assets/icons/amenidades/yoga.svg";
import pet from "../../../assets/icons/amenidades/pet.svg";

const amenidades = [
  {
    id: "alberca",
    label: "Alberca",
    icon: alberca,
    image: albercaImage,
  },
  {
    id: "casa-club",
    label: "Casa club",
    icon: casaClub,
    image: casaClubImage,
  },
  {
    id: "parking",
    label: "Estacionamiento",
    icon: parking,
    image: parkingImage,
  },
  {
    id: "parque",
    label: "Área de juegos infantiles",
    icon: parque,
    image: parqueImage,
  },
  {
    id: "asador",
    label: "Asadores",
    icon: asador,
    image: asadorImage,
  },
  {
    id: "pista",
    label: "Vista Pista",
    icon: pista,
    image: pistaImage,
  },
  {
    id: "cancha",
    label: "Canchas",
    icon: cancha,
    image: canchaImage,
  },
  {
    id: "gym",
    label: "Gimnasio",
    icon: gym,
    image: gymImage,
  },
  {
    id: "yoga",
    label: "Área Zen",
    icon: yoga,
    image: yogaImage,
  },
  {
    id: "pet",
    label: "Área Pet Friendly",
    icon: pet,
    image: petImage,
  },
];

export default function Amenidades() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = amenidades.map((amenidad) => {
    return (
      <div className="w-[891px] h-[491px] px-[10px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background image */}
          <img
            src={amenidad.image}
            alt={amenidad.id}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover rounded-tl-[150px]"
          />

          {/* Text */}
          <div className="relative flex flex-col justify-end w-full h-full">
            <div className="flex flex-col w-full h-[114px] justify-center items-center gap-[10px] rounded-tl-[50px] bg-verde-confianza">
              <img
                src={amenidad.icon}
                alt={amenidad.id + "icon"}
                className="h-[35px] brightness-0 invert"
              />
              <p className="text-display-min font-woodland leading-none text-beige-hogar">
                {amenidad.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handleAmenidadClick = (index) => {
    carouselRef.current?.scrollTo(index);
    // no hace falta setActiveIndex aquí manualmente,
    // el onSlideChange del carousel lo va a actualizar
  };

  return (
    <div className="flex flex-col w-full max-w-[1280px] py-[60px] gap-[20px]">
      {/* Texto */}
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[30px] text-center font-woodland font-bold leading-[110%] text-verde-confianza">
          Amenidades
        </h2>
        <h3 className="text-[30px] text-center font-woodland font-bold leading-[110%] text-verde-confianza">
          Más que propiedades, construimos patrimonio
        </h3>
        <p className="text-paragraph4 text-center leading-[115%] text-gris-profundo">
          Disfruta de cómodas áreas verdes, parques y una comunidad segura para
          tu familia.
        </p>
      </div>

      {/* Amenidades */}
      <div className="flex justify-center items-center gap-[20px]">
        {amenidades.map((amenidad, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={amenidad.id}
              onClick={() => handleAmenidadClick(index)}
              className={`flex justify-center items-center size-[56px] hover:cursor-pointer transition-colors ${
                isActive ? "bg-verde-confianza" : "bg-celeste-bienestar"
              }`}
            >
              <img
                src={amenidad.icon}
                alt={amenidad.id}
                className={`h-[24.5px] ${
                  isActive ? "brightness-0 invert" : ""
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Carrusel */}
      <div className="w-full max-w-[1280px] h-[600px] overflow-hidden">
        <Carousel
          ref={carouselRef}
          slides={slides}
          variant="card"
          onSlideChange={setActiveIndex}
        />
      </div>
    </div>
  );
}
