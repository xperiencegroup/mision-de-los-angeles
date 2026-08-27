import banner from "../../../assets/images/hero-banner.jpg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative w-full h-[850px] rounded-bl-[100px] md:rounded-bl-[200px] overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src={banner}
        alt="Imagen ilustrativa de Misión de los Ángeles"
        className="absolute w-full h-full inset-0 object-cover object-right md:object-center object-bottom"
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
      <div className="relative flex flex-col w-full h-full justify-end items-start px-[44px] md:px-[80px] pb-[120px] gap-[clamp(24px,4.063vw,52px)]">
        <h1 className="titulos-grandes font-woodland font-bold text-beige-hogar animate-hero-1">
          <span className="animate-hero-1 delay-100">Visualiza.</span>
          <br />
          <span className="animate-hero-1 delay-250">Transforma.</span>
          <br />
          <span className="animate-hero-1 delay-400">Trasciende.</span>
        </h1>

        <p className="titulos font-woodland text-beige-hogar animate-hero-3 delay-600">
          Vive en Misión de los Ángeles: <br />
          Sector Serafines
        </p>
      </div>
    </div>
  );
}
