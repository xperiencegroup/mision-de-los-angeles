import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import closeIcon from "../../../assets/icons/close.svg";

import { ModeloCarousel } from "../../../components/carousel/modelo-carousel";
import { track } from "../../../analytics/track";
import { TRACK } from "../../../analytics/track.constants";

export default function ModeloPopup({
  title,
  subtitle,
  description,
  secondDescription,
  niveles,
}) {
  const [params, setSearchParams] = useSearchParams();
  const modeloId = params.get("id");
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedNivel = niveles[selectedIndex];

  const handleCloseModal = () => {
    track(TRACK.home.popup.modelo.close, { item_id: modeloId });
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

  const slides = niveles.map((nivel) => (
    <div
      key={nivel.titulo}
      className="flex w-full h-full justify-start items-start px-[4px] lg:pr-[10px]"
    >
      {/* Características */}
      <div className="flex flex-col grow w-full h-full p-[29px] gap-[10px] rounded-t-[50px] bg-verde-confianza">
        <h3 className="subtitulos font-woodland font-bold text-verde-dinamico">
          {nivel.titulo}
        </h3>

        <ul className="flex flex-col gap-[10px]">
          {nivel.caracteristicas.map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-[20px]">
                <div className="shrink-0 flex justify-center items-center size-[35px] rounded-t-[30px] bg-beige-hogar">
                  <img
                    src={item.icon}
                    alt={`${item.icon}-image`}
                    className="size-[20.5px]"
                  />
                </div>
                <p className="descripcion text-beige-hogar">{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-beige-hogar">
      <div className="relative mx-auto flex min-h-svh w-full flex-col items-center justify-center px-[20px] py-[10px] xl:p-[10px]">
        {/* Boton de cerrar */}
        <button
          onClick={handleCloseModal}
          className="absolute right-[14px] top-[14px] md:right-[38px] md:top-[36px] flex justify-center items-center size-[42px] md:size-[60px] hover:cursor-pointer bg-celeste-bienestar"
        >
          <img src={closeIcon} className="size-[30px] md:size-[45px]" />
        </button>

        {/* Content */}
        <div className="flex w-full flex-col items-center justify-center gap-[20px] lg:flex-row">
          {/* Image */}
          <div className="relative h-[480px] w-full max-w-[425px] shrink-0 md:h-[580px] lg:h-[700px] lg:flex-1 max-lg:mb-4">
            <AnimatePresence mode="sync">
              <motion.img
                key={selectedNivel.image}
                src={selectedNivel.image}
                alt={selectedNivel.imageLabel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </AnimatePresence>

            <p className="absolute -bottom-5 left-1/2 -translate-x-[50%] text-[12px]">
              Imágenes con fines ilustrativos*
            </p>
          </div>
          {/* Text and slider */}
          <div className="w-full max-w-[735px] h-fit lg:flex-2 flex flex-col justify-center gap-[15px]">
            {/* title & description */}
            <div className="flex flex-col gap-[10px]">
              <h2 className="titulos font-woodland font-bold leading-[70%] text-center lg:text-left text-azul-integro">
                {title}
              </h2>
              <h3 className="parrafos italic uppercase font-semibold leading-none text-azul-integro">
                {subtitle}
              </h3>
              <p className="descripcion text-left leading-none text-gris-profundo whitespace-pre-line">
                {description}
              </p>
            </div>

            {/* Slider */}
            <div className="flex flex-col items-center lg:items-start gap-[15px] w-full h-fit">
              {/* Dots numerados */}
              <div className="flex items-start gap-[15px]">
                {niveles.map((nivel, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <button
                      key={nivel.titulo}
                      onClick={() => carouselRef.current?.scrollTo(index)}
                      className={`flex justify-center items-center size-[28px] text-[14px] font-basic-sans hover:cursor-pointer transition-colors ${
                        isActive
                          ? "bg-celeste-bienestar text-verde-confianza"
                          : "bg-verde-confianza text-celeste-bienestar"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col xl:flex-row w-full h-[418px] gap-[30px]">
                {/* Niveles */}
                <div className="flex w-full xl:max-w-[390px]">
                  <ModeloCarousel
                    ref={carouselRef}
                    slides={slides}
                    onSlideChange={(index) => {
                      setSelectedIndex(index);
                      track(TRACK.home.popup.modelo.nivel, {
                        item_id: modeloId,
                        nivel: niveles[index].titulo,
                      });
                    }}
                  />
                </div>

                {/* Descripción 2 */}
                <div className="flex justify-center items-center w-full xl:max-w-[316px] parrafos text-center xl:whitespace-pre-line text-gris-profundo">
                  {secondDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
