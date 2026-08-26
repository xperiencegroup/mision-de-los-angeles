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
        {/* Logo de misión de los ángeles */}
        <a
          href="#hero"
          className="relative w-[122px] h-[40px] hover:cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo Misión de los Ángeles"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </a>

        {/* Botónes de navegación */}
        {BUTTONS.map((button, index) => {
          // Botón de financiamiento
          if (button.id === "financiamiento")
            return (
              <button
                onClick={() => setSearchParams({ modal: "financiamiento" })}
                key={index}
                className={`px-[24px] py-[15px] text-button font-at-surt text-beige-hogar hover:cursor-pointer`}
              >
                {button.label}
              </button>
            );
          return (
            <a
              href={button.to}
              key={index}
              className={`px-[24px] py-[15px] text-button font-at-surt text-beige-hogar hover:cursor-pointer ${button.id === "cotiza" && "text-verde-confianza bg-celeste-bienestar"}`}
            >
              {button.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
