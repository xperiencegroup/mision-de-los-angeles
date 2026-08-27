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
import ModeloKinzo from "../popup/home/modelo-kinzo";
import ModeloReve from "../popup/home/modelo-reve";

export default function Home() {
  const [params] = useSearchParams();
  const activeModal = params.get("modal");
  const id = params.get("id");

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
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

      {activeModal === "financiamiento" && <Financiamiento />}
      {activeModal === "modelo" && id === "kinzo" && <ModeloKinzo />}
      {activeModal === "modelo" && id === "reve" && <ModeloReve />}
    </div>
  );
}
