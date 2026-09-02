import banner from "../../../assets/images/hero-banner.jpg";
import logoSerafines from "../../../assets/images/hero-title-serafines.svg";
import heroTitle from "../../../assets/images/hero-title-vtt.svg";
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
        className="absolute w-full h-full inset-0 object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-linear-210 from-verde-gradiente/0 from-21% via-verde-gradiente/90 via-79% to-verde-gradiente" />

      {/* Botón de whatsapp */}
      <a
        href="https://wa.me/528129104413"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-30 flex justify-center items-center size-[56px] bg-verde-dinamico bottom-[20px] right-[34px] hover:cursor-pointer"
      >
        <img
          src={whatsappIcon}
          alt="Ícono de whatsapp"
          className="size-[25px]"
        />
      </a>

      {/* Texto */}
      <div className="relative flex w-full h-full justify-center items-end px-[clamp(24px,6vw,80px)] pb-[120px] md:pb-[80px]">
        <div className="flex flex-col md:flex-row items-start justify-center md:justify-center md:items-center gap-[32px] md:gap-[65px] w-fit md:w-full max-w-[800px]">
          <img
            src={logoSerafines}
            alt="Misión de los Ángeles Serafines"
            className="h-[95px] md:w-[clamp(220px,40vw,395px)] md:h-auto"
          />

          {/* divider */}
          <div className="bg-beige-hogar w-full h-[1.5px] md:w-[1.5px] md:h-[clamp(140px,25vw,193px)]" />

          <img
            src={heroTitle}
            alt="Visualiza. Transforma. Trasciende."
            className="h-[95px] md:w-[clamp(160px,28vw,274px)] md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
