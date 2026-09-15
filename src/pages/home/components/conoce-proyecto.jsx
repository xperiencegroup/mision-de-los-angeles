import { useInView } from "../../../hooks/useInView";
import background from "../../../assets/images/background-texture.jpg";
import decorationRight from "../../../assets/images/decoration/conoce-right.svg";
import decorationLeft from "../../../assets/images/decoration/conoce-left.svg";

import banner from "../../../assets/images/banner-conoce.jpg";

const beneficios = [
  {
    titulo: "Calidad que se siente desde el primer día",
    descripcion:
      "Cada acabado, cada espacio, cada detalle fue elegido pensando en lo que tu familia vivirá a diario.",
  },
  {
    titulo: "Diseño que\n evoluciona contigo",
    descripcion:
      "Disfruta de cómodas áreas verdes, parques y una comunidad segura para tu familia.",
  },
  {
    titulo: "Una relación que no termina con la entrega",
    descripcion:
      "Acompañamos a nuestros clientes antes, durante y después de la compra, porque construir confianza es parte de construir tu hogar.",
  },
];

export default function ConoceProyecto() {
  const [titleRef, isTitleVisible] = useInView();
  const [cardsRef, isCardsVisible] = useInView();
  return (
    <div
      id="conoce"
      className="relative flex flex-col justify-center items-center w-full min-h-[640px] pt-[60px] gap-[40px]"
    >
      {/* Imagenes decorativas */}
      <div className="absolute -top-26 w-full h-fit max-w-[1280px] hidden min-[1220px]:block">
        <div className="flex justify-between relative w-full h-full">
          <img
            src={decorationLeft}
            alt="Imagen decorativa"
            className="h-[300px]"
          />
          <img
            src={decorationRight}
            alt="Imagen decorativa"
            className="h-[300px]"
          />
        </div>
      </div>

      {/* Background image */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden">
        <img
          src={background}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover scale-190"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col w-full h-full justify-center items-center gap-[30px] md:gap-[40px]">
        <div
          ref={titleRef}
          className={`reveal ${isTitleVisible ? "is-visible" : ""} flex flex-col gap-[5px] px-[51px]`}
        >
          <h2 className="titulos text-center font-woodland font-bold text-verde-confianza">
            Conoce Misión de los Ángeles: <br /> Serafines
          </h2>

          <p className="parrafos text-center text-gris-profundo">
            Áreas verdes, amenidades de primer nivel y una comunidad segura,{" "}
            <br className="max-md:hidden" />
            todo en uno de los sectores con mayor proyección de Apodaca.
          </p>
        </div>

        {/* Cuadros */}
        <div
          ref={cardsRef}
          className="flex flex-wrap gap-[15px] md:gap-[30px] justify-center items-center max-md:px-[30px]"
        >
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className={`reveal ${isCardsVisible ? "is-visible" : ""} flex flex-col justify-center items-center w-full min-[400px]:max-w-[330px] lg:max-w-[400px] min-h-[227px] min-[400px]:h-[271px] lg:h-[240px] p-[30px] lg:px-[20px] lg:py-[60px] gap-[5px] rounded-tl-[50px] bg-verde-confianza`}
              style={{
                transitionDelay: isCardsVisible ? `${index * 0.15}s` : "0s",
              }}
            >
              <h3 className="subtitulos text-center font-woodland font-bold tracking-tight whitespace-pre-wrap text-beige-hogar">
                {beneficio.titulo}
              </h3>
              <p className="parrafos text-center text-beige-hogar">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* banner */}
      <div className="relative w-full h-[40svh] rounded-tl-[120px] overflow-hidden">
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
