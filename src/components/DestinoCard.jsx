import { Link } from "react-router";

export default function DestinoCard({ destino }) {
  return (
    <article className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col">
      <h2 className="text-xl font-bold">{destino.nombre}</h2>
      <p className="text-sm text-gray-500 mb-3">{destino.pais}</p>

      <p className="text-sm font-semibold mb-2">Actividades populares</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {destino.actividades.map((actividad) => (
          <li key={actividad} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {actividad}
          </li>
        ))}
      </ul>

      <Link
        to={`/destinos/${destino.id}`}
        className="mt-auto text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Ver vuelos y hoteles
      </Link>
    </article>
  );
}