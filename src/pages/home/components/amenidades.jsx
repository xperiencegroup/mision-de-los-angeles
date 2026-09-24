import { useRef, useState } from "react";
import { useInView } from "../../../hooks/useInView";
import { Carousel } from "../../../components/carousel/Carousel";

// Images
import casetaImage from "../../../assets/images/amenidades/caseta.jpg";
import albercaImage from "../../../assets/images/amenidades/alberca.png";
import casaClubImage from "../../../assets/images/amenidades/casa.jpg";
import parqueImage from "../../../assets/images/amenidades/park.jpg";
import parqueCentralImage from "../../../assets/images/amenidades/parque-central.jpg";
import asadorImage from "../../../assets/images/amenidades/asador.jpg";

// Icons
import caseta from "../../../assets/icons/amenidades/caseta.svg";
import alberca from "../../../assets/icons/amenidades/pool.svg";
import casaClub from "../../../assets/icons/amenidades/club.svg";
import parque from "../../../assets/icons/amenidades/park.svg";
import parqueCentral from "../../../assets/icons/amenidades/parque-central.svg";
import asador from "../../../assets/icons/amenidades/asador.svg";
import { AmenidadButton } from "../../../components/buttons/amenidad-button";

const amenidades = [
  {
    id: "caseta",
    label: "Caseta",
    icon: caseta,
    image: casetaImage,
  },
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
    id: "juegos",
    label: "Área de juegos infantiles",
    icon: parque,
    image: parqueImage,
  },
  {
    id: "parque",
    label: "Parque Central",
    icon: parqueCentral,
    image: parqueCentralImage,
  },
  {
    id: "asador",
    label: "Asadores",
    icon: asador,
    image: asadorImage,
  },
];

export default function Amenidades() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = amenidades.map((amenidad) => {
    return (
      <div className="w-[clamp(261px,69.61vw,891px)] h-[clamp(280px,38.34vw,491px)] px-[25px] min-[362px]:px-[10px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background image */}
          <img
            src={amenidad.image}
            alt={amenidad.id}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[150px]"
          />

          {/* Text */}
          <div className="relative flex flex-col justify-end w-full h-full">
            <div className="flex w-full h-fit justify-center items-center gap-[15px] py-[10px] md:py-[20px] rounded-tl-[50px] bg-verde-confianza">
              <img
                src={amenidad.icon}
                alt={amenidad.id + "icon"}
                className="h-[20px] md:h-[35px] brightness-0 invert"
              />
              <p className="parrafos min-[490px]:parrafos font-woodland leading-none text-beige-hogar whitespace-nowrap">
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
  };

  const [titleRef, isTitleVisible] = useInView();
  const [iconsRef, isIconsVisible] = useInView();
  const [carouselWrapRef, isCarouselVisible] = useInView();

  return (
    <div
      id="amenidades"
      className="flex flex-col w-full max-w-[1280px] py-[60px] gap-[20px]"
    >
      {/* Texto */}
      <div
        ref={titleRef}
        className={`reveal ${isTitleVisible ? "is-visible" : ""} flex flex-col max-md:px-[44px] gap-[5px]`}
      >
        <h2 className="titulos text-center font-woodland font-bold leading-[110%] text-verde-confianza">
          Amenidades
        </h2>
        <h3 className="subtitulos text-center font-woodland font-bold leading-[110%] text-verde-confianza">
          Más que propiedades, construimos patrimonio
        </h3>
        <p className="parrafos text-center leading-[115%] text-gris-profundo">
          Disfruta de cómodas áreas verdes, parques y una comunidad segura para
          tu familia.
        </p>
      </div>

      {/* Amenidades */}
      <div
        ref={iconsRef}
        className="self-center grid grid-cols-3 w-fit place-items-center md:flex md:justify-center md:items-center gap-y-[10px] gap-x-[20px] md:gap-[20px]"
      >
        {amenidades.map((amenidad, index) => (
          <AmenidadButton
            key={amenidad.id}
            amenidad={amenidad}
            index={index}
            isActive={index === activeIndex}
            isIconsVisible={isIconsVisible}
            onSelect={() => handleAmenidadClick(index)}
          />
        ))}
      </div>

      {/* Carrusel */}
      <div
        ref={carouselWrapRef}
        className={`reveal-fade ${isCarouselVisible ? "is-visible" : ""} flex flex-col w-full max-w-[1280px] h-fit gap-[20px] overflow-hidden`}
      >
        <Carousel
          ref={carouselRef}
          slides={slides}
          variant="card"
          onSlideChange={setActiveIndex}
        />

        {/* Leyenda */}
        <p className="text-[12px] text-center">
          Imágenes con fines ilustrativos*
        </p>
      </div>
    </div>
  );
}
