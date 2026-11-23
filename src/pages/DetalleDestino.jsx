import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { useQuery } from "@apollo/client";
import { obtenerDestino } from "../services/destinosService";
import { OBTENER_OPCIONES_VIAJE } from "../graphql/queries";
import VueloCard from "../components/VueloCard";
import HotelCard from "../components/HotelCard";
import Cargando from "../components/Cargando";
import MensajeError from "../components/MensajeError";

export default function DetalleDestino() {
  const { id } = useParams();

  // Estado de los datos del destino (REST)
  const [destino, setDestino] = useState(null);
  const [cargandoDestino, setCargandoDestino] = useState(true);
  const [errorDestino, setErrorDestino] = useState(null);

  // Estado del filtro
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // Se vuelve a ejecutar cada vez que cambia el id de la URL
  useEffect(() => {
    let activo = true; // evita guardar una respuesta vieja si el usuario ya cambió de destino
    setCargandoDestino(true);
    setErrorDestino(null);

    obtenerDestino(id)
      .then((datos) => activo && setDestino(datos))
      .catch((err) => activo && setErrorDestino(err.message))
      .finally(() => activo && setCargandoDestino(false));

    return () => {
      activo = false;
    };
  }, [id]);

  // Vuelos y hoteles (GraphQL): la variable destinoId cambia con la URL
  const { data, loading, error } = useQuery(OBTENER_OPCIONES_VIAJE, {
    variables: { destinoId: id },
  });

  const volver = (
    <Link to="/destinos" className="text-green-700 underline">
      Volver a destinos
    </Link>
  );

  if (cargandoDestino) return <Cargando texto="Cargando destino..." />;
  if (errorDestino) {
    return (
      <div className="space-y-4">
        {volver}
        <MensajeError mensaje={errorDestino} />
      </div>
    );
  }

  const vuelos = data
    ? data.vuelos.filter((v) => !soloDisponibles || v.disponible)
    : [];
  const hoteles = data
    ? data.hoteles.filter((h) => !soloDisponibles || h.disponible)
    : [];

  return (
    <div className="space-y-8">
      {volver}

      <section className="bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold">{destino.nombre}</h1>
        <p className="text-gray-500 mb-4">{destino.pais}</p>
        <p className="text-sm font-semibold mb-2">Actividades populares</p>
        <ul className="flex flex-wrap gap-2">
          {destino.actividades.map((actividad) => (
            <li key={actividad} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {actividad}
            </li>
          ))}
        </ul>
      </section>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(e) => setSoloDisponibles(e.target.checked)}
          className="h-4 w-4 accent-green-600"
        />
        Mostrar solo opciones disponibles
      </label>

      {loading && <Cargando texto="Buscando vuelos y hoteles..." />}
      {error && <MensajeError mensaje="No se pudieron cargar los vuelos y hoteles." />}

      {data && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-4">Vuelos</h2>
            {vuelos.length === 0 ? (
              <p className="text-gray-500">No hay vuelos para mostrar.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vuelos.map((vuelo) => (
                  <VueloCard key={vuelo.id} vuelo={vuelo} />
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Hoteles</h2>
            {hoteles.length === 0 ? (
              <p className="text-gray-500">No hay hoteles para mostrar.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hoteles.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}