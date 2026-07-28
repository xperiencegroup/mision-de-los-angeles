import Navbar from "../layout/navbar";
import Amenidades from "./components/amenidades";
import ClosingBanner from "./components/closing-banner";
import ConoceProyecto from "./components/conoce-proyecto";
import Cotiza from "./components/cotiza";
import Formulario from "./components/formulario";
import Hero from "./components/hero";
import Modelos from "./components/modelos";
import Nosotros from "./components/nosotros";
import Ubicacion from "./components/ubicacion";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full gap-[50px]">
      <Navbar />

      <Hero />

      <Nosotros />

      <ConoceProyecto />

      <Amenidades />

      <Modelos />

      <Ubicacion />

      <Cotiza />

      <Formulario />

      <ClosingBanner />
    </div>
  );
}
