import { useSearchParams } from "react-router";
import logo from "../../assets/logos/logo-mision-angeles.svg";

const BUTTONS = [
  {
    id: "nosotros",
    label: "Nosotros",
    to: "#nosotros",
  },
  {
    id: "conoce-el-proyecto",
    label: "Conoce el proyecto",
    to: "#conoce",
  },
  {
    id: "amenidades",
    label: "Amenidades",
    to: "#amenidades",
  },
  {
    id: "modelos",
    label: "Modelo",
    to: "#modelo",
  },
  {
    id: "financiamiento",
    label: "Financiamiento",
    to: "#",
  },
  {
    id: "ubicacion",
    label: "Ubicación",
    to: "#ubicacion",
  },
  {
    id: "cotiza",
    label: "Cotiza",
    to: "#cotiza",
  },
];

export default function Navbar() {
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="navbar-enter fixed top-0 right-0 z-10 w-full flex justify-center bg-verde-confianza">
      <div className="w-full flex justify-around items-center max-w-[1280px] px-[20px] py-[15px]">
        {/* Logo de misión de los ángeles desktop*/}
        <a
          href="#hero"
          className="relative w-[54px] h-[24px] lg:w-[122px] lg:h-[40px] hover:cursor-pointer"
        >
          <img
            draggable={false}
            src={logo}
            alt="Logo Misión de los Ángeles"
            className="max-md:hidden absolute inset-0 w-full h-full object-contain"
          />
        </a>

        {/* Logo mobile */}

        {/* Botónes de navegación */}
        {BUTTONS.map((button, index) => {
          // Botón de financiamiento
          if (button.id === "financiamiento")
            return (
              <button
                onClick={() => setSearchParams({ modal: "financiamiento" })}
                key={index}
                className={`max-md:hidden px-[15px] lg:px-[24px] py-[15px] boton font-at-surt text-beige-hogar hover:cursor-pointer leading-[115%]`}
              >
                {button.label}
              </button>
            );
          return (
            <a
              href={button.to}
              key={index}
              className={`max-md:hidden px-[15px] lg:px-[24px] py-[15px] text-button font-at-surt text-beige-hogar hover:cursor-pointer whitespace-nowrap leading-[115%] ${button.id === "cotiza" && "text-verde-confianza bg-celeste-bienestar"}`}
            >
              {button.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
