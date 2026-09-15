import { useEffect, useRef } from "react";
import { useInView } from "../../../hooks/useInView";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import benevaCertified from "../../../assets/images/beneva-certificate.png";
import backgroundTexture from "../../../assets/images/background-texture.jpg";
import banner from "../../../assets/images/nosotros-banner.jpg";

const stats = [
  { end: 5, label: "Etapas del proyecto" },
  { end: 5500, separator: ",", suffix: " m²", label: "De amenidades" },
  { end: 200, suffix: "+", label: "Lotes Habitacionales" },
];

function Counter({ end, suffix = "", separator = "", trigger, delay = 0 }) {
  const count = useMotionValue(0);
  const ref = useRef(null);

  const formatted = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    return separator ? rounded.toLocaleString("en-US") : rounded.toString();
  });

  useEffect(() => {
    if (trigger) {
      const controls = animate(count, end, {
        duration: 1.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      });
      return () => controls.stop();
    }
  }, [trigger]);

  return (
    <>
      <motion.span ref={ref}>{formatted}</motion.span>
      {suffix}
    </>
  );
}

export default function Nosotros() {
  const [titleRef, isTitleVisible] = useInView();
  const [statsRef, isStatsVisible] = useInView();
  const [certRef, isCertVisible] = useInView();

  return (
    <div
      id="nosotros"
      className="flex flex-col gap-[30px] w-full justify-center items-center"
    >
      {/* Bloque "Licencias y permisos" */}
      <div ref={certRef} className="w-full py-[40px] md:py-[30px]">
        <div className="relative flex flex-col md:flex-row justify-center items-center p-[30px] gap-[20px] w-full">
          <div className="absolute -z-10 w-full h-full inset-0">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={backgroundTexture}
                className="absolute w-full h-full inset-0 object-cover scale-200 object-bottom"
              />
            </div>
          </div>

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

      {/* Stats bloque */}
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center px-[44px] md:px-[60px] gap-[40px]">
        <div ref={titleRef} className="flex flex-col w-full gap-[20px]">
          <h2
            className={`reveal ${isTitleVisible ? "is-visible" : ""} font-woodland font-bold text-center subtitulos text-verde-confianza`}
          >
            En Beneva construimos hogares donde las familias prosperan:{" "}
            <br className="max-lg:hidden" />
            tu nuevo hogar está en Apodaca, Nuevo León.
          </h2>

          <p
            className={`self-center w-full max-lg:max-w-[720px] reveal ${isTitleVisible ? "is-visible" : ""} parrafos text-center text-gris-profundo`}
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
          className="flex flex-col md:flex-row w-full max-w-[1000px] justify-center max-md:gap-[40px] gap-[20px]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`reveal-scale ${isStatsVisible ? "is-visible" : ""} flex flex-col gap-[4px] md:gap-[10px]`}
              style={{
                transitionDelay: isStatsVisible ? `${0.1 + i * 0.25}s` : "0s",
              }}
            >
              <p className="self-center w-[270px] titulos-grandes font-woodland font-bold text-center leading-none text-verde-confianza">
                <Counter
                  end={stat.end}
                  suffix={stat.suffix}
                  separator={stat.separator}
                  trigger={isStatsVisible}
                  delay={0.1 + i * 0.25}
                />
              </p>
              <p className="parrafos font-woodland text-center text-verde-confianza">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* imagen */}
      <div className="relative w-full h-[40svh] bg-red-500 rounded-tl-[120px] overflow-hidden">
        <img
          src={banner}
          alt="Imágen de salón social"
          className="absolute inset-0 w-full h-full object-cover object-[0%_40%]"
        />

        <p className="absolute bottom-3 left-1/2 -translate-x-[50%] text-[12px] text-beige-hogar">
          Imágenes con fines ilustrativos*
        </p>
      </div>
    </div>
  );
}
