import alberca from "../../../assets/icons/amenidades/pool.svg";
import casaClub from "../../../assets/icons/amenidades/club.svg";
import parking from "../../../assets/icons/amenidades/parking.svg";
import parque from "../../../assets/icons/amenidades/park.svg";
import asador from "../../../assets/icons/amenidades/asador.svg";
import pista from "../../../assets/icons/amenidades/vita-pista.svg";
import cancha from "../../../assets/icons/amenidades/ball.svg";
import gym from "../../../assets/icons/amenidades/gym.svg";
import yoga from "../../../assets/icons/amenidades/yoga.svg";
import pet from "../../../assets/icons/amenidades/pet.svg";

const amenidades = [
  {
    id: "alberca",
    icon: alberca,
  },
  {
    id: "casa-club",
    icon: casaClub,
  },
  {
    id: "parking",
    icon: parking,
  },
  {
    id: "parque",
    icon: parque,
  },
  {
    id: "asador",
    icon: asador,
  },
  {
    id: "pista",
    icon: pista,
  },
  {
    id: "cancha",
    icon: cancha,
  },
  {
    id: "gym",
    icon: gym,
  },
  {
    id: "yoga",
    icon: yoga,
  },
  {
    id: "pet",
    icon: pet,
  },
];

export default function Amenidades() {
  return (
    <div className="flex flex-col w-full max-w-[1280px] py-[60px] gap-[20px]">
      {/* Texto */}
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[30px] text-center font-woodland font-bold leading-[110%] text-verde-confianza">
          Amenidades
        </h2>
        <h3 className="text-[30px] text-center font-woodland font-bold leading-[110%] text-verde-confianza">
          Más que propiedades, construimos patrimonio
        </h3>
        <p className="text-paragraph4 text-center leading-[115%] text-gris-profundo">
          Disfruta de cómodas áreas verdes, parques y una comunidad segura para
          tu familia.
        </p>
      </div>

      {/* Amenidades */}
      <div className="flex justify-center items-center gap-[20px]">
        {amenidades.map((amenidad, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center size-[56px] bg-celeste-bienestar"
            >
              <img
                src={amenidad.icon}
                alt={amenidad.id}
                className="h-[24.5px]"
              />
            </div>
          );
        })}
      </div>

      {/* Carrusel */}
    </div>
  );
}
