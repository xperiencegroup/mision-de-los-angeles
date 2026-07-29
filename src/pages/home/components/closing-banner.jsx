import bgImage from "../../../assets/images/closing-banner-bg.jpg";

export default function ClosingBanner() {
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
        <h3 className="text-[40px] font-woodland font-bold leading-[110%] text-beige-hogar">
          ¿Listo para conocer Misión de los Ángeles?
        </h3>

        <p className="text-[30px] text-center font-woodland leading-[110%] text-beige-hogar">
          Descubre sus espacios, amenidades y modelos disponibles. <br />
          Nuestro equipo está listo para acompañarte y resolver todas tus dudas.
        </p>

        <div className="flex gap-[24px]">
          <button className="w-[150px] text-[17px] px-[24px] py-[15px] text-verde-confianza bg-beige-hogar">
            Amenidades
          </button>
          <button className="w-[150px] text-[17px] px-[24px] py-[15px] text-verde-confianza bg-beige-hogar">
            Modelos
          </button>
        </div>
      </div>
    </div>
  );
}
