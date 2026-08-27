import background from "../../../assets/images/background-texture.jpg";
import kinzoImage from "../../../assets/images/modelos/kinzo.jpg";
import reveImage from "../../../assets/images/modelos/reve.jpg";
import decorationLeft from "../../../assets/images/decoration/modelos-left.svg";
import decorationRight from "../../../assets/images/decoration/modelos-right.svg";
import { useSearchParams } from "react-router";
import { useInView } from "../../../hooks/useInView";

export default function Modelos() {
  const [, setSearchParams] = useSearchParams();
  const handleOpenModel = (model) => {
    setSearchParams({ modal: "modelo", id: model });
  };

  const [decorRef, isDecorVisible] = useInView();
  const [titleRef, isTitleVisible] = useInView();
  const [cardsRef, isCardsVisible] = useInView();

  return (
    <div
      id="modelo"
      className="relative flex justify-center items-center w-full p-[60px]"
    >
      {/* Imagenes decorativas */}
      <div
        ref={decorRef}
        className="absolute w-full max-w-[1280px] h-fit top-0"
      >
        <div className="flex justify-between relative w-full h-full">
          <img
            src={decorationLeft}
            alt="Decoración del lado izquierdo"
            className={`reveal-left ${isDecorVisible ? "is-visible" : ""} w-[240px]`}
          />
          <img
            src={decorationRight}
            alt="Decoración del lado derecho"
            className={`reveal-right ${isDecorVisible ? "is-visible" : ""} w-[240px]`}
          />
        </div>
      </div>

      {/* Background image */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
        <img
          src={background}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover scale-280"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col w-full h-full justify-center items-center gap-[40px]">
        <div
          ref={titleRef}
          className={`reveal ${isTitleVisible ? "is-visible" : ""} flex flex-col gap-[20px] px-[51px]`}
        >
          <h2 className="text-[30px] text-center font-woodland font-bold leading-[110%] text-verde-confianza">
            Modelos
          </h2>

          <h3 className="text-[30px] text-center font-woodland font-bold leading-[110%] text-verde-confianza">
            Elige el espacio <br /> que se adapta a tu familia
          </h3>

          <p className="text-paragraph4 text-center leading-[115%] text-gris-profundo">
            Dos opciones diseñadas con inteligencia: desde la cochera <br />
            hasta la terraza, cada espacio tiene una razón de ser.
          </p>
        </div>

        {/* Cuadros */}
        <div
          ref={cardsRef}
          className="flex justify-center items-center gap-[60px]"
        >
          {/* Modelo Kinzo */}
          <div
            className={`reveal-scale ${isCardsVisible ? "is-visible" : ""} w-[546px] bg-verde-confianza rounded-br-[100px] overflow-hidden`}
          >
            <div className="relative w-full h-[326px]">
              <img
                src={kinzoImage}
                alt="Imagen del Modelo Revé"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Texto */}
            <div className="flex flex-col w-full justify-center items-center px-[24px] py-[30px] gap-[20px]">
              <h4 className="text-[30px] font-woodland leading-none text-beige-hogar">
                Modelo Kinzo Plus
              </h4>
              <p className="text-[30px] font-woodland text-beige-hogar">
                Casa de 2 Niveles
              </p>
              <button
                onClick={() => handleOpenModel("kinzo")}
                className="px-[24px] py-[15px] text-button font-at-surt text-verde-confianza bg-celeste-bienestar"
              >
                Ver modelo
              </button>
            </div>
          </div>

          {/* Modelo Revé */}
          <div
            className={`reveal-scale ${isCardsVisible ? "is-visible" : ""} w-[546px] bg-verde-confianza rounded-br-[100px] overflow-hidden`}
          >
            <div className="relative w-full h-[326px]">
              <img
                src={reveImage}
                alt="Imagen del Modelo Revé"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Texto */}
            <div className="flex flex-col w-full justify-center items-center px-[24px] py-[30px] gap-[20px]">
              <h4 className="text-[30px] font-woodland leading-none text-beige-hogar">
                Modelo Revé Plus
              </h4>
              <p className="text-[30px] font-woodland text-beige-hogar">
                Casa de 3 Niveles
              </p>
              <button
                onClick={() => handleOpenModel("reve")}
                className="px-[24px] py-[15px] text-button font-at-surt text-verde-confianza bg-celeste-bienestar"
              >
                Ver modelo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
