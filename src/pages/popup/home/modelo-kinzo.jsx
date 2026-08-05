import { useEffect } from "react";
import { useSearchParams } from "react-router";
import closeIcon from "../../../assets/icons/close.svg";
import plantaBaja from "../../../assets/images/modelos/kinzo/planta-baja.png";
import plantaAlta from "../../../assets/images/modelos/kinzo/planta-alta.png";

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
};

export default function ModeloKinzo() {
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
            Modelo Kinzo
          </h2>
          <p className="text-paragraph4 text-center leading-[110%] text-gris-profundo">
            Dos plantas diseñadas para disfrutar cada espacio en familia. Kinzo
            integra áreas sociales amplias en la planta baja y tres recámaras en
            el segundo nivel, cada una con baño completo, además de estancia y
            lavandería.
          </p>

          {/* Images */}
          <div className="flex justify-center items-center py-[30px]">
            {/* Planta baja */}
            <div className="flex flex-col">
              <div className="relative w-[423px] h-[607px]">
                <img
                  src={plantaBaja}
                  alt="Modelo Kinzo planta baja"
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </div>
              <p className="text-center font-woodland font-bold text-[30px] text-verde-confianza">
                Planta Baja
              </p>
            </div>

            {/* Planta alta */}
            <div className="flex flex-col">
              <div className="relative w-[423px] h-[607px]">
                <img
                  src={plantaAlta}
                  alt="Modelo Kinzo planta baja"
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </div>
              <p className="text-center font-woodland font-bold text-[30px] text-verde-confianza">
                2a Planta
              </p>
            </div>
          </div>

          {/* Características */}
          <div className="flex justify-between">
            {/* Primer nivel */}
            <div className="flex flex-col w-[550px] h-[668px] px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-verde-confianza">
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
            <div className="flex flex-col w-[550px] h-[668px] px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-verde-confianza">
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
          </div>
        </div>
      </div>
    </div>
  );
}
