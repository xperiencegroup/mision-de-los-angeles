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
  return (
    <div className="fixed inset-0 z-50 flex justify-center w-full bg-black/30 backdrop-blur-sm overflow-y-auto">
      <div className="relative flex flex-col w-full max-w-[1280px] h-fit px-[51px] py-[60px] gap-[26px] bg-verde-confianza">
        {/* Boton de cerrar */}
        <button
          onClick={handleCloseModal}
          className="absolute right-[38px] top-[36px] flex justify-center items-center size-[60px] hover:cursor-pointer bg-celeste-bienestar"
        >
          <img src={closeIcon} className="size-[45px]" />
        </button>

        {/* Texts */}
        <div className="flex flex-col gap-5">
          <h2 className="text-display2 text-center font-woodland text-verde-dinamico">
            Financiamiento
          </h2>
          <p className="text-paragraph4 text-center leading-[110%] text-beige-hogar">
            En Misión de los Ángeles creemos que encontrar tu hogar ideal
            también debe ser un proceso claro y accesible. Por ello, contamos
            con distintas opciones de financiamiento y asesoría especializada
            para acompañarte en cada paso.
            <br /> <br />
            Nuestro equipo te ayudará a identificar la alternativa de crédito
            que mejor se adapte a tu perfil, para que puedas enfocarte en lo más
            importante: comenzar una nueva etapa junto a tu familia.
          </p>
        </div>

        {/* Créditos */}
        <div className="flex h-[615px] justify-between gap-[44px]">
          {/* Infonavit */}
          <div className="flex-1 flex flex-col h-full justify-center items-center px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-beige-hogar">
            {/* Imagen */}
            <div className="flex justify-center items-center py-[40px]">
              <img
                src={infonavitLogo}
                alt="Lofo infonavit"
                className="w-[125px] h-[88px]"
              />
            </div>
            <p className="text-[25px] leading-[110%] text-gris-profundo">
              Es un crédito en pesos que te otorga el INFONAVIT en
              coparticipación con otra entidad financiera.
            </p>

            {/* Lista */}
            <ul className="flex flex-col gap-[20px]">
              <li className="flex gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[33px] rounded-full bg-verde-confianza" />
                </div>
                <p className="text-[22px] leading-[130%] text-verde-confianza">
                  El monto de tu crédito se calcula en función al plazo que
                  elijas para pagarlo y tu capacidad de pago.
                </p>
              </li>
              <li className="flex gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[33px] rounded-full bg-verde-confianza" />
                </div>
                <p className="text-[22px] leading-[130%] text-verde-confianza">
                  Los gastos de titulación, financieros y de operación son del
                  5% respecto al monto de tu crédito.
                </p>
              </li>
              <li className="flex gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[33px] rounded-full bg-verde-confianza" />
                </div>
                <p className="text-[22px] leading-[130%] text-verde-confianza">
                  La tasa de interés es fija.
                </p>
              </li>
            </ul>
          </div>

          {/* Infonavit Total*/}
          <div className="flex-1 flex flex-col h-full justify-center items-center px-[30px] py-[40px] gap-[20px] rounded-t-[50px] bg-beige-hogar">
            {/* Imagen */}
            <div className="flex justify-center items-center py-[40px]">
              <img
                src={infonavitTotal}
                alt="Lofo infonavit"
                className="w-[272px] h-[71px]"
              />
            </div>
            <p className="text-[25px] leading-[110%] text-gris-profundo">
              Crédito administrado por el INFONAVIT, que otorga todos los
              beneficios que ofrece, además de obtener los servicios y productos
              bancarios de la institución crediticia que complete el crédito.
            </p>

            {/* Lista */}
            <ul className="flex flex-col gap-[20px]">
              <li className="flex gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[33px] rounded-full bg-verde-confianza" />
                </div>
                <p className="text-[22px] leading-[130%] text-verde-confianza">
                  Financian hasta el 90% del valor de la casa en plazos desde 5
                  hasta 20 años.
                </p>
              </li>
              <li className="flex gap-[20px]">
                <div className="flex justify-center items-center">
                  <div className="size-[33px] rounded-full bg-verde-confianza" />
                </div>
                <p className="text-[22px] leading-[130%] text-verde-confianza">
                  Los créditos son en pesos.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bancos */}
        <div className="flex w-full h-[155px] justify-between px-[30px] py-[60px] rounded-b-[50px] bg-beige-hogar">
          <img src={bbvaLogo} className="h-[35px]" />
          <img src={hsbcLogo} className="h-[35px]" />
          <img src={santanderLogo} className="h-[35px]" />
          <img src={banorteLogo} className="h-[35px]" />
          <img src={banregioLogo} className="h-[35px]" />
        </div>
      </div>
    </div>
  );
}
