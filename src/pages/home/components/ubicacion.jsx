import mapa from "../../../assets/images/mapa.svg";

export default function Ubicacion() {
  return (
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
  );
}
