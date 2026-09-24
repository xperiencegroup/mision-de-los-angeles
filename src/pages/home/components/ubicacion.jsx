import { track } from "../../../analytics/track";
import { TRACK } from "../../../analytics/track.constants";
import mapa from "../../../assets/images/mapa-v1.svg";
import { useInView } from "../../../hooks/useInView";

export default function Ubicacion() {
  const [titleRef, isTitleVisible] = useInView();
  const [mapRef, isMapVisible] = useInView();

  return (
    <div
      id="ubicacion"
      className="w-full flex flex-col justify-center items-center px-[44px] py-[40px] md:py-[32px] gap-[20px] min-h-[40svh] md:min-h-[70svh]"
    >
      <h2
        ref={titleRef}
        className={`reveal ${isTitleVisible ? "is-visible" : ""} titulos text-center font-woodland font-bold text-verde-confianza`}
      >
        Visítanos
      </h2>

      <a
        ref={mapRef}
        href="https://www.google.com/maps/place/Misi%C3%B3n+de+Los+%C3%81ngeles,+Sector+Serafines/@25.7710356,-100.2189019,279m/data=!3m1!1e3!4m6!3m5!1s0x8662eb002db01cc1:0xdcaefe4fe80a727e!8m2!3d25.7710345!4d-100.2185753!16s%2Fg%2F11mdb62g9_?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track(TRACK.home.ubicacion.mapClick)}
        className={`reveal-scale ${isMapVisible ? "is-visible" : ""} hover:opacity-90 transition-opacity`}
        style={{ transitionDelay: isMapVisible ? "0.15s" : "0s" }}
      >
        <img
          src={mapa}
          alt="Mapa de Misión de los Ángeles"
          className="w-fit md:h-[386px] xl:h-[460px]"
        />
      </a>
    </div>
  );
}
