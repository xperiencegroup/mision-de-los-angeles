import background from "../../../assets/images/background-texture.jpg";
import kinzoImage from "../../../assets/images/modelos/kinzo.jpg";
import reveImage from "../../../assets/images/modelos/reve.jpg";
import decorationLeft from "../../../assets/images/decoration/modelos-left.svg";
import decorationRight from "../../../assets/images/decoration/modelos-right.svg";
import { useSearchParams } from "react-router";
import { useInView } from "../../../hooks/useInView";
import { track } from "../../../analytics/track";
import { TRACK } from "../../../analytics/track.constants";

const modelos = [
  {
    id: "kinzo",
    image: kinzoImage,
    alt: "Imagen del Modelo Kinzo",
    nombre: "Modelo Kinzo",
    detalle: (
      <>
        2 Niveles -{" "}
        <span className="font-bold">
          158m<sup>2</sup>
        </span>
      </>
    ),
  },
  {
    id: "reve",
    image: reveImage,
    alt: "Imagen del Modelo Revé",
    nombre: "Modelo Revé",
    detalle: (
      <>
        3 Niveles -{" "}
        <span className="font-bold">
          198m<sup>2</sup>
        </span>
      </>
    ),
  },
  {
    id: "kinzo-plus",
    image: kinzoImage,
    alt: "Imagen del Modelo Kinzo Plus",
    nombre: "Modelo Kinzo Plus",
    detalle: (
      <>
        2 Niveles -{" "}
        <span className="font-bold">
          170m<sup>2</sup>
        </span>
      </>
    ),
  },
  {
    id: "reve-plus",
    image: reveImage,
    alt: "Imagen del Modelo Revé Plus",
    nombre: "Modelo Revé Plus",
    detalle: (
      <>
        3 Niveles -{" "}
        <span className="font-bold">
          213m<sup>2</sup>
        </span>
      </>
    ),
  },
];

export default function Modelos() {
  const [, setSearchParams] = useSearchParams();

  const handleOpenModel = (model) => {
    track(TRACK.home.modelos.card, { item_id: model });
    setSearchParams({ modal: "modelo", id: model });
  };

  const [decorRef, isDecorVisible] = useInView();
  const [titleRef, isTitleVisible] = useInView();
  const [cardsRef, isCardsVisible] = useInView();

  return (
    <div
      id="modelo"
      className="relative flex justify-center items-center w-full p-[44px] md:p-[60px]"
    >
      {/* Imagenes decorativas */}
      <div
        ref={decorRef}
        className="absolute w-full max-w-[1280px] h-fit -top-17 max-lg:hidden"
      >
        <div className="flex justify-between relative w-full h-full">
          <img
            src={decorationLeft}
            alt="Decoración del lado izquierdo"
            className={`reveal-left ${isDecorVisible ? "is-visible" : ""} w-[180px]`}
          />
          <img
            src={decorationRight}
            alt="Decoración del lado derecho"
            className={`reveal-right ${isDecorVisible ? "is-visible" : ""} w-[180px]`}
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
      <div className="relative flex flex-col w-full h-full justify-center items-center gap-[20px]">
        <div
          ref={titleRef}
          className={`reveal ${isTitleVisible ? "is-visible" : ""} flex flex-col gap-[5px]`}
        >
          <h2 className="titulos text-center font-woodland font-bold leading-[110%] text-verde-confianza">
            Modelos
          </h2>

          <h3 className="subtitulos text-center font-woodland font-bold leading-[110%] text-verde-confianza">
            Elige el espacio que se adapta a tu familia
          </h3>

          <p className="parrafos text-center text-gris-profundo">
            Dos opciones diseñadas con inteligencia: desde la cochera hasta la
            terraza, cada espacio tiene una razón de ser.
          </p>
        </div>

        {/* Cuadros */}
        <div
          ref={cardsRef}
          className="flex flex-row flex-wrap justify-center items-center gap-[20px] md:gap-x-[60px]"
        >
          {modelos.map((modelo, index) => {
            return (
              <div
                key={index}
                className={`reveal-scale ${isCardsVisible ? "is-visible" : ""} w-full max-w-[546px] lg:w-[546px] bg-verde-confianza rounded-br-[80px] lg:rounded-br-[100px] overflow-hidden`}
              >
                <div className="relative w-full h-[189px]">
                  <img
                    src={modelo.image}
                    alt={modelo.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* Texto */}
                <div className="flex flex-col min-[480px]:flex-row w-full justify-center items-center px-[24px] py-[20px] gap-[16px] min-[480px]:gap-[30px]">
                  <button
                    onClick={() => handleOpenModel(modelo.id)}
                    className="px-[24px] py-[15px] text-button font-woodland text-verde-confianza bg-celeste-bienestar hover:cursor-pointer"
                  >
                    Ver modelo
                  </button>
                  <div className="flex flex-col">
                    <h4 className="subtitulos font-woodland font-bold text-center leading-none text-beige-hogar">
                      {modelo.nombre}
                    </h4>
                    <p className="parrafos max-[480px]:text-center text-beige-hogar">
                      {modelo.detalle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="absolute -bottom-10 text-[12px] text-center text-gris-profundo">
          Imágenes con fines ilustrativos*
        </p>
      </div>
    </div>
  );
}
