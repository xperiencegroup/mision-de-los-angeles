import { useEffect } from "react";
import { useSearchParams } from "react-router";
import closeIcon from "../../../assets/icons/close.svg";
import plantaBaja from "../../../assets/images/modelos/reve/planta-baja.png";
import planta2 from "../../../assets/images/modelos/reve/planta-2.png";
import planta3 from "../../../assets/images/modelos/reve/planta-3.png";

// íconos
import cochera from "../../../assets/icons/modelos/parking.svg";
import bano from "../../../assets/icons/modelos/bano.svg";
import social from "../../../assets/icons/modelos/social.svg";
import patio from "../../../assets/icons/modelos/patio.svg";
import cocina from "../../../assets/icons/modelos/cocina.svg";
import sala from "../../../assets/icons/modelos/sala.svg";
import comedor from "../../../assets/icons/modelos/comedor.svg";
import lavadora from "../../../assets/icons/modelos/lavadora.svg";
import cama from "../../../assets/icons/modelos/cama.svg";
import regadera from "../../../assets/icons/modelos/regadera.svg";
import lavanderia from "../../../assets/icons/modelos/lavanderia.svg";
import terraza from "../../../assets/icons/modelos/terraza.svg";

const CARACTERISITCAS = {
  "primer-nivel": [
    {
      label: "Cochera techada para 2 autos",
      icon: cochera,
    },
    {
      label: "Medio baño",
      icon: bano,
    },
    {
      label: "Área Social",
      icon: social,
    },
    {
      label: "Patio",
      icon: patio,
    },
    {
      label: "Cocina",
      icon: cocina,
    },
    {
      label: "Sala",
      icon: sala,
    },
    {
      label: "Comedor",
      icon: comedor,
    },
  ],
  "segundo-nivel": [
    {
      label: "Estancia",
      icon: sala,
    },
    {
      label: "Lavandería",
      icon: lavadora,
    },
    {
      label: "Recámara principal con walk-in closet y baño completo",
      icon: cama,
    },
    {
      label: "2 recámaras secundarias, cada una con baño completo",
      icon: cama,
    },
    {
      label: "3 Baños completos",
      icon: regadera,
    },
  ],
  "tercer-nivel": [
    {
      label: "Sala de juegos",
      icon: sala,
    },
    {
      label: "Doble terraza",
      icon: terraza,
    },
    {
      label: "Cuarto de servicio",
      icon: lavanderia,
    },
    {
      label: "Baño completo",
      icon: bano,
    },
  ],
};

export default function ModeloReve() {
  const [, setSearchParams] = useSearchParams();

  const handleCloseModal = () => {
    setSearchParams({});
  };

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center w-full bg-black/30 backdrop-blur-sm overflow-y-auto">
      <div className="relative flex flex-col w-full max-w-[1280px] h-fit p-[60px] gap-[17px] bg-beige-hogar">
        {/* Boton de cerrar */}
        <button
          onClick={handleCloseModal}
          className="absolute right-[38px] top-[36px] flex justify-center items-center size-[60px] hover:cursor-pointer bg-celeste-bienestar"
        >
          <img src={closeIcon} className="size-[45px]" />
        </button>

        {/* Texts */}
        <div className="flex flex-col gap-5">
          <h2 className="text-display2 text-center font-woodland font-bold text-verde-confianza">
            Modelo Revé Plus
          </h2>
          <p className="text-paragraph4 text-center leading-[110%] text-gris-profundo">
            Tres plantas que ofrecen mayor amplitud y versatilidad para la vida
            familiar. Revé cuenta con tres recámaras con baño completo,
            estancia, sala de juegos, doble terraza y cuarto de servicio.
          </p>

          {/* Images */}
          <div className="flex justify-center items-center py-[30px]">
            {/* Planta baja */}
            <div className="flex flex-col">
              <div className="relative w-[378px] h-[607px]">
                <img
                  src={plantaBaja}
                  alt="Modelo Revé Plus planta baja"
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </div>
              <p className="text-center font-woodland font-bold text-[30px] text-verde-confianza">
                Planta Baja
              </p>
            </div>

            {/* 2a Planta */}
            <div className="flex flex-col">
              <div className="relative w-[378px] h-[607px]">
                <img
                  src={planta2}
                  alt="Modelo Revé Plus planta baja"
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </div>
              <p className="text-center font-woodland font-bold text-[30px] text-verde-confianza">
                2a Planta
              </p>
            </div>

            {/* 3a Planta */}
            <div className="flex flex-col">
              <div className="relative w-[378px] h-[607px]">
                <img
                  src={planta3}
                  alt="Modelo Revé Plus planta baja"
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </div>
              <p className="text-center font-woodland font-bold text-[30px] text-verde-confianza">
                3er Planta
              </p>
            </div>
          </div>

          {/* Características */}
          <div className="flex justify-between">
            {/* Primer nivel */}
            <div className="flex flex-col w-[374px] h-[726px] px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-verde-confianza">
              <h3 className="text-[30px] font-woodland font-bold leading-none text-verde-dinamico">
                Primer Nivel:
              </h3>

              <ul className="flex flex-col gap-[20px]">
                {CARACTERISITCAS["primer-nivel"].map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-[20px]">
                      <div className="flex justify-center items-center size-[60px] rounded-t-[30px] bg-beige-hogar">
                        <img src={item.icon} alt={`${item.icon}-image`} />
                      </div>
                      <p className="text-[25px] text-beige-hogar">
                        {item.label}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Segundo Nivel */}
            <div className="flex flex-col w-[374px] h-[726px] px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-verde-confianza">
              <h3 className="text-[30px] font-woodland font-bold leading-none text-verde-dinamico">
                Segundo Nivel:
              </h3>

              <ul className="flex flex-col gap-[20px]">
                {CARACTERISITCAS["segundo-nivel"].map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-[20px]">
                      <div className="flex shrink-0 justify-center items-center size-[60px] rounded-t-[30px] bg-beige-hogar">
                        <img src={item.icon} alt={`${item.icon}-image`} />
                      </div>
                      <p className="text-[25px] leading-[110%] text-beige-hogar">
                        {item.label}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tercer Nivel */}
            <div className="flex flex-col w-[374px] h-[726px] px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-verde-confianza">
              <h3 className="text-[30px] font-woodland font-bold leading-none text-verde-dinamico">
                Tercer Nivel:
              </h3>

              <ul className="flex flex-col gap-[20px]">
                {CARACTERISITCAS["tercer-nivel"].map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-[20px]">
                      <div className="flex shrink-0 justify-center items-center size-[60px] rounded-t-[30px] bg-beige-hogar">
                        <img src={item.icon} alt={`${item.icon}-image`} />
                      </div>
                      <p className="text-[25px] leading-[110%] text-beige-hogar">
                        {item.label}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
