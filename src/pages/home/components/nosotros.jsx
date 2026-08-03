import benevaCertified from "../../../assets/images/beneva-certificate.png";

export default function Nosotros() {
  return (
    <div id="nosotros" className="flex flex-col">
      {/* Primer bloque */}
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center p-[60px] gap-[40px]">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[30px] font-woodland font-bold text-center leading-[110%] text-verde-confianza">
            En Beneva construimos hogares donde las familias prosperan: <br />
            tu nuevo hogar está en Apodaca, Nuevo León.
          </h2>

          <p className="text-paragraph4 text-center leading-[110%] text-gris-profundo">
            Creemos que vivir bien es un derecho, no un lujo.
            <br />
            Por eso diseñamos comunidades donde cada detalle está pensado para
            tu bienestar y el de los tuyos.
          </p>
        </div>

        {/* Números */}
        <div className="flex w-full max-w-[1000px] justify-between">
          {/* Etapas del proyecto */}
          <div className="flex flex-col">
            <p className="text-[76px] font-woodland font-bold leading-none text-verde-confianza">
              5
            </p>
            <p className="font-basic-sans text-paragraph1 text-verde-confianza">
              Etapas del proyecto
            </p>
          </div>

          {/* Amenidades */}
          <div className="flex flex-col">
            <p className="text-[76px] font-woodland font-bold leading-none text-verde-confianza">
              5,500 m<sup>2</sup>
            </p>
            <p className="font-basic-sans text-paragraph1 text-verde-confianza">
              De amenidades
            </p>
          </div>

          {/* Lotes Habitacionales */}
          <div className="flex flex-col">
            <p className="text-[76px] font-woodland font-bold leading-none text-verde-confianza">
              200 +
            </p>
            <p className="font-basic-sans text-paragraph1 text-verde-confianza">
              Lotes Habitacionales
            </p>
          </div>
        </div>
      </div>

      {/* Segundo bloque */}
      <div className="flex justify-center items-center p-[60px] gap-[24px]">
        <img src={benevaCertified} className="size-[154px] invisible"></img>
        <p className="text-display2 text-center font-woodland font-bold leading-[110%] text-verde-confianza">
          Este proyecto cuenta con todas <br /> las licencias y permisos de
          construcción
        </p>
        <img src={benevaCertified} className="size-[154px]"></img>
      </div>
    </div>
  );
}
