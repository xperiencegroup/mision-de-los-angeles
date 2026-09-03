import bgImage from "../../../assets/images/closing-banner-bg.jpg";
import { useInView } from "../../../hooks/useInView";

export default function ClosingBanner() {
  const [textRef, isTextInView] = useInView();
  const [buttonsRef, isButtonsInView] = useInView();

  return (
    <div className="relative w-full h-[755px] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={bgImage}
        alt="Imagen ilustrativa de Misión de los Ángeles"
        className="absolute w-full h-full inset-0 object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-linear-to-b from-verde-gradiente/0 from-7% via-verde-gradiente/30 via-48% to-verde-gradiente" />

      {/* Texto */}
      <div className="relative flex flex-col w-full h-full justify-end items-center p-[60px] gap-[20px]">
        <div
          ref={textRef}
          className={`reveal ${isTextInView ? "is-visible" : ""} flex flex-col items-center gap-[5px]`}
        >
          <h3 className="titulos font-woodland font-bold leading-[110%] text-beige-hogar text-center">
            ¿Listo para conocer Misión de los Ángeles?
          </h3>

          <p className="parrafos text-center text-beige-hogar">
            Descubre sus espacios, amenidades y modelos disponibles.{" "}
            <br className="max-md:hidden" />
            Nuestro equipo está listo para acompañarte y resolver todas tus
            dudas.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className={`reveal-scale ${isButtonsInView ? "is-visible" : ""} flex flex-wrap justify-center items-center gap-[24px]`}
          style={{ transitionDelay: isButtonsInView ? "0.25s" : "0s" }}
        >
          <a
            href="#amenidades"
            className="relative w-[150px] boton px-[24px] py-[15px] font-woodland text-center text-verde-confianza bg-beige-hogar before:absolute before:bottom-0 before:left-0 hover:before:h-[3px] before:w-full before:bg-celeste-bienestar active:bg-celeste-bienestar"
          >
            Amenidades
          </a>
          <a
            href="#modelo"
            className="relative w-[150px] boton px-[24px] py-[15px] font-woodland text-center text-verde-confianza bg-beige-hogar before:absolute before:bottom-0 before:left-0 hover:before:h-[3px] before:w-full before:bg-celeste-bienestar active:bg-celeste-bienestar"
          >
            Modelos
          </a>
        </div>
      </div>

      {/* Leyenda */}
      <p className="absolute bottom-5 right-5 text-[12px] text-center text-beige-hogar">
        Imágenes con fines ilustrativos*
      </p>
    </div>
  );
}
