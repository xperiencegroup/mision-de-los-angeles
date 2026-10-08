import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/home";

export default function Router() {
  return (
    <BrowserRouter basename="/misiondelosangeles">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
