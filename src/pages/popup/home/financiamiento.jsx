import { useEffect } from "react";
import { useSearchParams } from "react-router";
import closeIcon from "../../../assets/icons/close.svg";
import infonavitLogo from "../../../assets/images/marcas/Logoinfonavit.svg";
import infonavitTotal from "../../../assets/images/marcas/logoinfonavittotal.png";
import bbvaLogo from "../../../assets/images/marcas/bbva.png";
import hsbcLogo from "../../../assets/images/marcas/HSBC.png";
import santanderLogo from "../../../assets/images/marcas/santander.png";
import banorteLogo from "../../../assets/images/marcas/banorte.png";
import banregioLogo from "../../../assets/images/marcas/banregio.png";

export default function Financiamiento() {
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
    <div className="fixed inset-0 z-50 flex justify-center w-full overflow-y-auto bg-verde-confianza">
      <div className="relative flex flex-col w-full justify-center items-center max-w-[1280px] h-fit lg:h-svh px-[44px] md:px-[51px] py-[100px] min-[500px]:py-[50px] gap-[10px] lg:gap-[20px]">
        {/* Boton de cerrar */}
        <button
          onClick={handleCloseModal}
          className="absolute right-[20px] md:right-[38px] top-[20px] flex justify-center items-center size-[47px] md:size-[60px] hover:cursor-pointer bg-celeste-bienestar"
        >
          <img src={closeIcon} className="size-[30px] md:size-[45px]" />
        </button>

        {/* Texts */}
        <div className="max-[500px]:hidden flex flex-col">
          <h2 className="titulos text-center font-woodland text-verde-dinamico">
            Financiamiento
          </h2>
          <p className="parrafos text-center text-beige-hogar">
            En Misión de los Ángeles creemos que encontrar tu hogar ideal
            también debe ser un proceso claro y accesible. <br /> Por ello,
            contamos con distintas opciones de financiamiento y asesoría
            especializada para acompañarte en cada paso.
            <br /> <br />
            Nuestro equipo te ayudará a identificar la alternativa de crédito
            que mejor se adapte a tu perfil, para que puedas enfocarte en lo más
            importante: comenzar una nueva etapa junto a tu familia.
          </p>
        </div>

        {/* Créditos */}
        <div className="flex flex-col min-[924px]:flex-row justify-between gap-[10px]">
          {/* Infonavit */}
          <div className="flex-1 flex flex-col min-h-[332px] justify-center items-center px-[30px] py-[30px] min-[500px]:py-[40px] gap-[5px] rounded-t-[50px] bg-beige-hogar">
            {/* Imagen */}
            <div className="flex justify-center items-center">
              <img
                src={infonavitLogo}
                alt="Lofo infonavit"
                className="w-[50px] h-[50px]"
              />
            </div>
            <p className="parrafos text-gris-profundo">
              Es un crédito en pesos que te otorga el INFONAVIT en
              coparticipación con otra entidad financiera.
            </p>

            {/* Lista */}
            <ul className="flex flex-col gap-[5px]">
              <li className="flex max-[500px]:flex-col gap-[5px] min-[500px]:gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[15px] rounded-full bg-verde-confianza" />
                </div>
                <p className="parrafos text-verde-confianza">
                  El monto de tu crédito se calcula en función al plazo que
                  elijas para pagarlo y tu capacidad de pago.
                </p>
              </li>
              <li className="flex max-[500px]:flex-col gap-[5px] min-[500px]:gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[15px] rounded-full bg-verde-confianza" />
                </div>
                <p className="parrafos text-verde-confianza">
                  Los gastos de titulación, financieros y de operación son del
                  5% respecto al monto de tu crédito.
                </p>
              </li>
              <li className="flex max-[500px]:flex-col gap-[5px] min-[500px]:gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[15px] rounded-full bg-verde-confianza" />
                </div>
                <p className="parrafos text-verde-confianza">
                  La tasa de interés es fija.
                </p>
              </li>
            </ul>
          </div>

          {/* Infonavit Total*/}
          <div className="flex-1 flex flex-col min-h-[332px] justify-center items-center px-[30px] py-[30px] min-[500px]:py-[40px] gap-[5px] rounded-t-[50px] bg-beige-hogar">
            {/* Imagen */}
            <div className="flex justify-center items-center">
              <img
                src={infonavitTotal}
                alt="Lofo infonavit"
                className="h-[50px]"
              />
            </div>
            <p className="parrafos text-gris-profundo">
              Crédito administrado por el INFONAVIT, que otorga todos los
              beneficios que ofrece, además de obtener los servicios y productos
              bancarios de la institución crediticia que complete el crédito.
            </p>

            {/* Lista */}
            <ul className="flex flex-col gap-[5px]">
              <li className="flex max-[500px]:flex-col gap-[5px] min-[500px]:gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[15px] rounded-full bg-verde-confianza" />
                </div>
                <p className="parrafos text-verde-confianza">
                  Financian hasta el 90% del valor de la casa en plazos desde 5
                  hasta 20 años.
                </p>
              </li>
              <li className="flex max-[500px]:flex-col gap-[5px] min-[500px]:gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[15px] rounded-full bg-verde-confianza" />
                </div>
                <p className="parrafos text-verde-confianza">
                  Los créditos son en pesos.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bancos */}
        <div className="flex flex-col min-[500px]:flex-row flex-wrap w-full h-fit justify-center min-[969px]:justify-between items-center px-[30px] py-[30px] min-[500px]:py-[40px] lg:py-[60px] gap-[20px] min-[500px]:gap-[40px] rounded-b-[50px] bg-beige-hogar">
          <img src={bbvaLogo} className="h-[29px]" />
          <img src={hsbcLogo} className="h-[29px]" />
          <img src={santanderLogo} className="h-[29px]" />
          <img src={banorteLogo} className="h-[29px]" />
          <img src={banregioLogo} className="h-[29px]" />
        </div>
      </div>
    </div>
  );
}
