import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import closeIcon from "../../../assets/icons/close.svg";

import { ModeloCarousel } from "../../../components/carousel/modelo-carousel";

export default function ModeloPopup({ title, description, niveles }) {
  const [, setSearchParams] = useSearchParams();
  const [selectedNivel, setSelectedNivel] = useState(niveles[0]);

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

  const slides = niveles.map((nivel) => (
    <div
      key={nivel.titulo}
      className="flex w-full h-full justify-start items-start px-[4px] lg:pr-[20px]"
    >
      {/* Características */}
      <div className="flex flex-col grow w-full h-fit p-[29px] gap-[10px] rounded-t-[50px] bg-verde-confianza">
        <h3 className="subtitulos font-woodland font-bold text-verde-dinamico">
          {nivel.titulo}
        </h3>

        <ul className="flex flex-col gap-[10px]">
          {nivel.caracteristicas.map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-[20px]">
                <div className="shrink-0 flex justify-center items-center size-[45px] rounded-t-[30px] bg-beige-hogar">
                  <img
                    src={item.icon}
                    alt={`${item.icon}-image`}
                    className="size-[26.5px]"
                  />
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
    <div className="fixed inset-0 z-50 flex justify-center items-start w-full overflow-y-auto">
      <div className="relative flex flex-col justify-center items-center w-full min-h-svh lg:h-svh px-[44px] py-[60px] md:px-[60px] lg:p-0 bg-beige-hogar">
        {/* Boton de cerrar */}
        <button
          onClick={handleCloseModal}
          className="absolute right-[14px] top-[14px] md:right-[38px] md:top-[36px] flex justify-center items-center size-[42px] md:size-[60px] hover:cursor-pointer bg-celeste-bienestar"
        >
          <img src={closeIcon} className="size-[30px] md:size-[45px]" />
        </button>

        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:flex-row w-full h-full gap-[20px]">
          {/* Image */}
          <div className="w-full shrink-0 h-[480px] lg:h-full max-w-[425px] lg:flex-1 relative">
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
          </div>
          {/* Text and slider */}
          <div className="w-full max-w-[735px] h-fit lg:flex-2 flex flex-col justify-center gap-[15px]">
            {/* title & description */}
            <div className="flex flex-col">
              <h2 className="titulos font-woodland font-bold leading-none text-center lg:text-left text-verde-confianza">
                {title}
              </h2>
              <p className="parrafos text-left text-gris-profundo">
                {description}
              </p>
            </div>

            {/* Slider */}
            <div className="flex w-full h-fit">
              <ModeloCarousel
                slides={slides}
                onSlideChange={(index) => setSelectedNivel(niveles[index])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
