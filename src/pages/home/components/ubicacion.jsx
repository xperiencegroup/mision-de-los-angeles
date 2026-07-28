import mapa from "../../../assets/images/mapa.svg";

export default function Ubicacion() {
  return (
    <div className="flex flex-col w-full gap-[50px]">
      {/* Visítanos */}
      <div className="w-full flex flex-col justify-center items-center py-[32px] gap-[20px]">
        <h2 className="text-[30px] text-center font-woodland font-bold text-verde-confianza">
          Visítanos
        </h2>

        <img
          src={mapa}
          alt="Mapa de Misión de los Ángeles"
          className="w-[686px] h-[386px]"
        />
      </div>

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
    </div>
  );
}
