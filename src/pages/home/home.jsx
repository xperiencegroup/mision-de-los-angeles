import Navbar from "../layout/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-[50px]">
      <Navbar />

      <Hero />
    </div>
  );
}
