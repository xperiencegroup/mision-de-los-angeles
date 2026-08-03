import banner from "../../../assets/images/hero-banner.jpg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative w-full h-[850px] rounded-bl-[200px] overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src={banner}
        alt="Imagen ilustrativa de Misión de los Ángeles"
        className="absolute w-full h-full inset-0 object-cover object-bottom"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-linear-210 from-verde-gradiente/0 from-21% via-verde-gradiente/90 via-79% to-verde-gradiente" />

      {/* Botón de whatsapp */}
      <a className="fixed z-50 flex justify-center items-center size-[56px] bg-verde-dinamico bottom-[20px] right-[34px]">
        <img
          src={whatsappIcon}
          alt="Ícono de whatsapp"
          className="size-[25px]"
        />
      </a>

      {/* Texto */}
      <div className="relative flex flex-col w-full h-full justify-end items-start px-[80px] pb-[120px] gap-[clamp(24px,4.063vw,52px)]">
        <h1 className="text-[76px] font-woodland font-bold leading-[110%] text-beige-hogar">
          Visualiza. <br />
          Tranforma. <br />
          Trasciende.
        </h1>

        <p className="text-[34px] font-woodland leading-[110%] text-beige-hogar">
          Vive en Misión de los Ángeles: <br />
          Sector Serafines
        </p>
      </div>
    </div>
  );
}
