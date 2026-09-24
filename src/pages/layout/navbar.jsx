import { useState } from "react";
import { useSearchParams } from "react-router";
import logo from "../../assets/logos/logo-mision-angeles.svg";
import logoBeneva from "../../assets/logos/beneva-logo.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-enter fixed z-50 top-0 right-0 z-10 w-full flex justify-center bg-verde-confianza">
      <div className="w-full flex max-md:h-[76px] justify-between md:justify-around items-center max-w-[1280px] p-[20px] md:px-[20px] md:py-[15px]">
        {/* Logo de misión de los ángeles desktop*/}
        <a
          href="#hero"
          onClick={() => track(TRACK.home.logo.home, { device: "desktop" })}
          className="max-md:hidden relative w-[54px] h-[24px] lg:w-[122px] lg:h-[40px] hover:cursor-pointer"
        >
          <img
            draggable={false}
            src={logo}
            alt="Logo Misión de los Ángeles"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </a>

        {/* Logo mobile */}
        <a
          href="#hero"
          onClick={() => track(TRACK.home.logo.home, { device: "mobile" })}
          className="md:hidden relative w-[122px] h-[19px] hover:cursor-pointer"
        >
          <img
            draggable={false}
            src={logoBeneva}
            alt="Logo Misión de los Ángeles"
            className=" absolute inset-0 w-full h-full object-contain"
          />
        </a>

        {/* Botónes de navegación */}
        {BUTTONS.map((button, index) => {
          // Botón de financiamiento
          if (button.id === "financiamiento")
            return (
              <button
                onClick={() => {
                  track(TRACK.home.menu.item, {
                    item_id: button.id,
                    device: "desktop",
                  });
                  setSearchParams({ modal: "financiamiento" });
                }}
                key={index}
                className={`max-md:hidden px-[15px] lg:px-[24px] py-[15px] boton text-beige-hogar hover:cursor-pointer leading-[115%]`}
              >
                {button.label}
              </button>
            );
          return (
            <a
              href={button.to}
              key={index}
              onClick={() => {
                track(TRACK.home.menu.item, {
                  item_id: button.id,
                  device: "desktop",
                });
              }}
              className={`max-md:hidden px-[15px] lg:px-[24px] py-[15px] text-button text-beige-hogar hover:cursor-pointer whitespace-nowrap leading-[115%] ${button.id === "cotiza" && "text-verde-confianza bg-celeste-bienestar"}`}
            >
              {button.label}
            </a>
          );
        })}

        {/* Menu mobile */}
        <button
          onClick={() => {
            track(TRACK.home.menu.toggle, {
              action: isMenuOpen ? "close" : "open",
            });
            setIsMenuOpen(!isMenuOpen);
          }}
          className={`md:hidden flex justify-center items-center size-[42px] transition-colors ${isMenuOpen ? "bg-celeste-bienestar" : "bg-beige-hogar"}`}
        >
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="Ícono de menu"
            className="w-[22px] h-fit"
          />
        </button>

        {/* Panel mobile */}
        <div
          inert={!isMenuOpen}
          className={`absolute top-[76px] left-0 w-full h-fit bg-verde-confianza md:hidden flex flex-col justify-start items-center p-[20px] pt-[30px] gap-[10px] transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {BUTTONS.map((button, index) => {
            if (button.id === "financiamiento")
              return (
                <button
                  key={index}
                  onClick={() => {
                    track(TRACK.home.menu.item, {
                      item_id: button.id,
                      device: "mobile",
                    });
                    setSearchParams({ modal: "financiamiento" });
                    setIsMenuOpen(false);
                  }}
                  className="w-full boton font-woodland text-center px-[24px] py-[15px] text-beige-hogar hover:cursor-pointer"
                >
                  {button.label}
                </button>
              );

            return (
              <a
                key={index}
                href={button.to}
                onClick={() => {
                  track(TRACK.home.menu.item, {
                    item_id: button.id,
                    device: "mobile",
                  });
                  setIsMenuOpen(false);
                }}
                className={`w-full boton font-woodland text-center px-[24px] py-[15px] hover:cursor-pointer ${
                  button.id === "cotiza"
                    ? "text-verde-confianza bg-celeste-bienestar"
                    : "text-beige-hogar"
                }`}
              >
                {button.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
