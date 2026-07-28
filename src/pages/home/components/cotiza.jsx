import background from "../../../assets/images/background-texture.jpg";
import cotizaImg from "../../../assets/images/cotiza.jpg";

export default function Cotiza() {
  return (
    <div className="flex flex-col w-full">
      {/* Horario de atención */}
      <div className="flex flex-col w-full justify-center items-center py-[30px] gap-[20px] bg-verde-confianza">
        <h3 className="text-[30px] text-center font-woodland font-bold text-beige-hogar">
          Horario de atención
        </h3>
        <p className="text-paragraph1 text-beige-hogar">
          Lunes a Viernes: 11:00 AM - 7:00 PM
        </p>
        <p className="text-paragraph1 text-beige-hogar">
          Sábados: 10:00 AM - 5:00 PM
        </p>
        <p className="text-paragraph1 text-beige-hogar">Domingos: Cerrado</p>
      </div>

      <div className="relative flex justify-center items-center w-full h-[715px] gap-[32px]">
        {/* Background image */}
        <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
          <img
            src={background}
            alt="Imagen de fondo"
            className="absolute inset-0 w-full h-full object-cover scale-280"
          />
        </div>

        {/* Image */}
        <div className="relative flex-1 h-full rounded-br-[200px] overflow-hidden">
          <img
            src={cotizaImg}
            alt="Imagen de Misión de los Ángeles"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-col w-full h-full justify-center">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[30px] text-left font-woodland font-bold leading-[110%] text-verde-confianza">
              Cotiza y aprovecha <br /> tu promoción
            </h2>

            <p className="text-paragraph4 text-left leading-[115%] text-gris-profundo">
              Habla con un asesor hoy y da el primer <br />
              paso hacia el hogar que tu familia merece.
            </p>

            <button className="w-fit px-[24px] py-[15px] text-azul-integro bg-celeste-bienestar hover:cursor-pointer">
              Cotiza
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
