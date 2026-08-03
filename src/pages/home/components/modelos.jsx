import background from "../../../assets/images/background-texture.jpg";
import kinzoImage from "../../../assets/images/modelos/kinzo.jpg";
import reveImage from "../../../assets/images/modelos/reve.jpg";
import decorationLeft from "../../../assets/images/decoration/modelos-left.svg";
import decorationRight from "../../../assets/images/decoration/modelos-right.svg";

export default function Modelos() {
  return (
    <div
      id="modelo"
      className="relative flex justify-center items-center w-full p-[60px]"
    >
      {/* Imagenes decorativas */}
      <div className="absolute w-full max-w-[1280px] h-fit top-0">
        <div className="flex justify-between relative w-full h-full">
          <img src={decorationLeft} alt="Decoración del lado izquierdo" />
          <img src={decorationRight} alt="Decoración del lado derecho" />
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
        <div className="flex flex-col gap-[20px] px-[51px]">
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
        <div className="flex justify-center items-center gap-[60px]">
          {/* Modelo Kinzo */}
          <div className="w-[546px] bg-verde-confianza rounded-br-[100px] overflow-hidden">
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
                Modelo Kinzo
              </h4>
              <p className="text-[30px] font-woodland text-beige-hogar">
                Casa de 2 Niveles
              </p>
              <button className="px-[24px] py-[15px] text-button font-at-surt text-verde-confianza bg-celeste-bienestar">
                Ver modelo
              </button>
            </div>
          </div>

          {/* Modelo Revé */}
          <div className="w-[546px] bg-verde-confianza rounded-br-[100px] overflow-hidden">
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
                Modelo Kinzo
              </h4>
              <p className="text-[30px] font-woodland text-beige-hogar">
                Casa de 2 Niveles
              </p>
              <button className="px-[24px] py-[15px] text-button font-at-surt text-verde-confianza bg-celeste-bienestar">
                Ver modelo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
