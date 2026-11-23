import { useState, useEffect } from "react";
import { obtenerDestinos } from "../services/destinosService";
import DestinoCard from "../components/DestinoCard";
import Cargando from "../components/Cargando";
import MensajeError from "../components/MensajeError";

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // Se ejecuta una vez, al mostrarse la página
  useEffect(() => {
    obtenerDestinos()
      .then((datos) => setDestinos(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  const destinosFiltrados = destinos.filter(
    (d) =>
      d.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      d.pais.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <Cargando texto="Cargando destinos..." />;
  if (error) return <MensajeError mensaje={error} />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Destinos</h1>
      <p className="text-gray-600 mb-6">Elige un destino para ver sus vuelos y hoteles.</p>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por destino o país..."
        className="w-full sm:w-80 mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {destinosFiltrados.length === 0 ? (
        <p className="text-gray-500">No hay destinos que coincidan con tu búsqueda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinosFiltrados.map((destino) => (
            <DestinoCard key={destino.id} destino={destino} />
          ))}
        </div>
      )}
    </div>
  );
}