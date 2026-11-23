import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Inicio from "./pages/Inicio.jsx";
import Destinos from "./pages/Destinos.jsx";
import DetalleDestino from "./pages/DetalleDestino.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/:id" element={<DetalleDestino />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}