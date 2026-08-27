import benevaCertified from "../../../assets/images/beneva-certificate.png";
import { useInView } from "../../../hooks/useInView";

const stats = [
  { value: "5", label: "Etapas del proyecto" },
  {
    value: (
      <>
        5,500 m<sup>2</sup>
      </>
    ),
    label: "De amenidades",
  },
  { value: "200 +", label: "Lotes Habitacionales" },
];

export default function Nosotros() {
  const [titleRef, isTitleVisible] = useInView();
  const [statsRef, isStatsVisible] = useInView();
  const [certRef, isCertVisible] = useInView();
  return (
    <div id="nosotros" className="flex flex-col">
      {/* Primer bloque */}
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center px-[44px] py-[60px] md:p-[60px] gap-[40px]">
        <div ref={titleRef} className={`flex flex-col w-full gap-[20px]`}>
          <h2
            className={`reveal ${isTitleVisible ? "is-visible" : ""} font-woodland font-bold text-center subtitulos text-verde-confianza`}
          >
            En Beneva construimos hogares donde las familias prosperan:{" "}
            <br className="max-lg:hidden" />
            tu nuevo hogar está en Apodaca, Nuevo León.
          </h2>

          <p
            className={`w-full max-lg:max-w-[720px] reveal ${isTitleVisible ? "is-visible" : ""} parrafos text-center text-gris-profundo`}
            style={{ transitionDelay: isTitleVisible ? "0.1s" : "0s" }}
          >
            Creemos que vivir bien es un derecho, no un lujo.
            <br />
            Por eso diseñamos comunidades donde cada detalle está pensado para
            tu bienestar y el de los tuyos.
          </p>
        </div>

        {/* Números */}
        <div
          ref={statsRef}
          className="flex flex-col md:flex-row w-full max-w-[1000px] justify-between max-md:gap-[40px]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`reveal-scale ${isStatsVisible ? "is-visible" : ""} flex flex-col gap-[4px] md:gap-[10px]`}
              style={{
                transitionDelay: isStatsVisible ? `${0.1 + i * 0.25}s` : "0s",
              }}
            >
              <p className="titulos-grandes font-woodland font-bold text-center leading-none text-verde-confianza">
                {stat.value}
              </p>
              <p className="parrafos font-woodland text-center text-verde-confianza">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Segundo bloque */}
      <div
        ref={certRef}
        className="flex flex-col justify-center items-center px-[44px] md:p-[60px] gap-[20px]"
      >
        <img
          src={benevaCertified}
          className={`reveal-fade ${isCertVisible ? "is-visible" : ""} size-[81px] md:size-[122px]`}
        />
        <p
          className={`reveal-fade ${isCertVisible ? "is-visible" : ""} titulos text-center font-woodland font-bold text-verde-confianza`}
          style={{ transitionDelay: isCertVisible ? "0.2s" : "0s" }}
        >
          Este proyecto cuenta con todas <br className="max-md:hidden" /> las
          licencias y permisos de construcción
        </p>
      </div>
    </div>
  );
}
