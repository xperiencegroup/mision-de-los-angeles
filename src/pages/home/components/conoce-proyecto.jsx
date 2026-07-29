import background from "../../../assets/images/background-texture.jpg";
import decorationRight from "../../../assets/images/decoration/conoce-right.svg";
import decorationLeft from "../../../assets/images/decoration/conoce-left.svg";

const beneficios = [
  {
    titulo: "Calidad que se siente desde el primer día",
    descripcion:
      "Cada acabado, cada espacio, cada detalle fue elegido pensando en lo que tu familia vivirá a diario.",
  },
  {
    titulo: "Diseño que evoluciona contigo",
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
  return (
    <div className="relative flex justify-center items-center w-full h-[640px] py-[60px]">
      {/* Imagenes decorativas */}
      <div className="absolute -top-48 w-full h-fit max-w-[1280px]">
        <div className="flex justify-between relative w-full h-full">
          <img src={decorationLeft} alt="Imagen decorativa" />
          <img src={decorationRight} alt="Imagen decorativa" />
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
      <div className="flex flex-col w-full h-full justify-center items-center gap-[40px]">
        <div className="flex flex-col gap-[20px] px-[51px]">
          <h2 className="text-[30px] text-center font-woodland font-bold leading-[110%] text-verde-confianza">
            Conoce Misión de los Ángeles:
            <br />
            Sector Serafines
          </h2>

          <p className="text-paragraph4 text-center leading-[115%] text-gris-profundo">
            Áreas verdes, amenidades de primer nivel y una comunidad segura,
            <br />
            todo en uno de los sectores con mayor proyección de Apodaca.
          </p>
        </div>

        {/* Cuadros */}
        <div className="flex gap-[30px]">
          {beneficios.map((beneficio, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-[400px] h-[347px] p-[40px] gap-[25px] rounded-tl-[50px] bg-verde-confianza"
              >
                <h3 className="text-[30px] text-center font-woodland font-bold tracking-tight leading-none text-beige-hogar">
                  {beneficio.titulo}
                </h3>
                <p className="text-[25px] text-center leading-none text-beige-hogar">
                  {beneficio.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
