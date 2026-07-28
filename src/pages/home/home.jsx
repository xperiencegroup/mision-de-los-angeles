import Navbar from "../layout/navbar";
import Amenidades from "./components/amenidades";
import ConoceProyecto from "./components/conoce-proyecto";
import Hero from "./components/hero";
import Nosotros from "./components/nosotros";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full gap-[50px]">
      <Navbar />

      <Hero />

      <Nosotros />

      <ConoceProyecto />

      <Amenidades />
    </div>
  );
}
