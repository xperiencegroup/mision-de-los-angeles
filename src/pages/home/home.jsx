import { useSearchParams } from "react-router";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
import Financiamiento from "../popup/home/financiamiento";
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
  const [params] = useSearchParams();
  const isModalActive = params.get("modal");

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

      <div className="w-full">
        <ClosingBanner />
        <Footer />
      </div>

      {isModalActive && <Financiamiento />}
    </div>
  );
}
