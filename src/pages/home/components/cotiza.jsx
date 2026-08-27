import { useInView } from "../../../hooks/useInView";
import background from "../../../assets/images/background-texture.jpg";
import cotizaImg from "../../../assets/images/cotiza.jpg";

// decoracion
import decorationRight from "../../../assets/images/decoration/horario-right.svg";
import decorationLeft from "../../../assets/images/decoration/horario-left.svg";
import { useSearchParams } from "react-router";

export default function Cotiza() {
  const [scheduleRef, isScheduleInView] = useInView();
  const [, setSearchParams] = useSearchParams();

  // Cotiza
  const [imageRef, isImageInView] = useInView();
  const [textRef, isTextInView] = useInView();
  return (
    <div id="cotiza" className="flex flex-col w-full">
      {/* Horario de atención */}
      <div
        ref={scheduleRef}
        className={`reveal ${isScheduleInView ? "is-visible" : ""} relative flex flex-col w-full justify-center items-center text-center px-[44px] py-[30px] gap-[20px] md:gap-[10px] bg-verde-confianza`}
      >
        {/* decoración */}
        <div className="flex absolute w-full h-full inset-0 justify-center max-[1120px]:hidden">
          <div className="relative w-full max-w-[1280px] h-full">
            {/* decoracion izquierda */}
            <img
              src={decorationRight}
              alt=""
              className="absolute w-[206px] left-0 -top-[210px]"
            />
            {/* decoracion derecha */}
            <img
              src={decorationLeft}
              alt=""
              className="absolute w-[206px] right-0 -top-[195px]"
            />
          </div>
        </div>

        <h3 className="titulos text-center font-woodland font-bold text-beige-hogar">
          Horario de atención
        </h3>
        <p className="parrafos font-light text-beige-hogar">
          Lunes a Viernes:{" "}
          <span className="whitespace-nowrap">11:00 AM - 7:00 PM</span>
        </p>
        <p className="parrafos font-light text-beige-hogar">
          Sábados: <span className="whitespace-nowrap">10:00 AM - 5:00 PM</span>
        </p>
        <p className="parrafos font-light text-beige-hogar">
          Domingos: Cerrado
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row justify-center items-center w-full h-fit lg:h-[715px] gap-[32px] p-[44px] lg:p-0">
        {/* Background image */}
        <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
          <img
            src={background}
            alt="Imagen de fondo"
            className="absolute inset-0 w-full h-full object-cover scale-280"
          />
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className={`reveal-left ${isImageInView ? "is-visible" : ""} relative lg:flex-1 grow w-full h-[715px] lg:h-full rounded-br-[80px] md:rounded-br-[200px] overflow-hidden`}
        >
          <img
            src={cotizaImg}
            alt="Imagen de Misión de los Ángeles"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className={`reveal-right ${isTextInView ? "is-visible" : ""} flex flex-1 flex-col w-full h-full justify-center`}
        >
          <div className="flex flex-col gap-[20px]">
            <h2 className="titulos text-left font-woodland font-bold leading-[110%] text-verde-confianza">
              Cotiza y aprovecha <br /> tu promoción
            </h2>

            <p className="parrafos text-left text-gris-profundo">
              Habla con un asesor hoy y da el primer{" "}
              <br className="max-sm:hidden" />
              paso hacia el hogar que tu familia merece.
            </p>

            <button
              onClick={() => setSearchParams({ modal: "financiamiento" })}
              className="w-fit px-[24px] py-[15px] text-azul-integro bg-celeste-bienestar hover:cursor-pointer"
            >
              Cotiza
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
