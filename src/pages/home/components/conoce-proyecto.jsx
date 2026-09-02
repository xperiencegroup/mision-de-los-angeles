import background from "../../../assets/images/background-texture.jpg";
import decorationRight from "../../../assets/images/decoration/conoce-right.svg";
import decorationLeft from "../../../assets/images/decoration/conoce-left.svg";
import { useInView } from "../../../hooks/useInView";

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
      className="relative flex justify-center items-center w-full min-h-[640px] py-[60px]"
    >
      {/* Imagenes decorativas */}
      <div className="absolute -top-45 w-full h-fit max-w-[1280px] hidden min-[1220px]:block">
        <div className="flex justify-between relative w-full h-full">
          <img
            src={decorationLeft}
            alt="Imagen decorativa"
            className="h-[333px]"
          />
          <img
            src={decorationRight}
            alt="Imagen decorativa"
            className="h-[333px]"
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
            Conoce
            <br />
            Misión de los Ángeles: Serafines
          </h2>

          <p className="parrafos text-center text-gris-profundo">
            Áreas verdes, amenidades de primer nivel y una comunidad segura,
            <br className="max-md:hidden" /> todo en uno de los sectores con
            mayor proyección de Apodaca.
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
              className={`reveal ${isCardsVisible ? "is-visible" : ""} flex flex-col justify-center items-center w-full min-[400px]:max-w-[330px] lg:max-w-[400px] min-h-[227px] min-[400px]:h-[271px] lg:h-[313px] p-[30px] lg:px-[20px] lg:py-[60px] gap-[5px] rounded-tl-[50px] bg-verde-confianza`}
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
    </div>
  );
}
