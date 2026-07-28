import logo from "../../assets/logos/misionLogo.png";

const BUTTONS = [
  {
    id: "nosotros",
    label: "Nosotros",
  },
  {
    id: "conoce-el-proyecto",
    label: "Conoce el proyecto",
  },
  {
    id: "amenidades",
    label: "Amenidades",
  },
  {
    id: "modelos",
    label: "Modelo",
  },
  {
    id: "financiamiento",
    label: "Financiamiento",
  },
  {
    id: "ubicacion",
    label: "Ubicación",
  },
  {
    id: "cotiza",
    label: "Cotiza",
  },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-10 w-full flex justify-center bg-verde-confianza">
      <div className="w-full flex justify-around items-center max-w-[1280px] px-[20px] py-[15px]">
        {/* Logo de misión de los ángeles */}
        <button className="relative w-[122px] h-[40px]">
          <img
            src={logo}
            alt="Logo Misión de los Ángeles"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </button>

        {/* Botónes de navegación */}
        {BUTTONS.map((button, index) => {
          return (
            <button
              key={index}
              className={`px-[24px] py-[15px] text-button font-at-surt text-beige-hogar hover:cursor-pointer ${button.id === "cotiza" && "text-verde-confianza bg-celeste-bienestar"}`}
            >
              {button.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
