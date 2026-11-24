import { Link } from "react-router";

const pasos = [
  { titulo: "Explora destinos", texto: "Conoce países y sus actividades más populares." },
  { titulo: "Compara vuelos", texto: "Revisa precios, fechas y disponibilidad." },
  { titulo: "Elige tu hotel", texto: "Encuentra alojamiento según tu destino." },
];

export default function Inicio() {
  return (
    <div className="space-y-10">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 sm:p-12 text-center shadow">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Planifica tu próximo viaje</h1>
        <p className="mb-6 text-green-100">
          Explora destinos y consulta vuelos y hoteles en un solo lugar.
        </p>
        <Link
          to="/destinos"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Ver destinos
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {pasos.map((paso) => (
          <div key={paso.titulo} className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="font-semibold text-lg mb-1">{paso.titulo}</h2>
            <p className="text-sm text-gray-600">{paso.texto}</p>
          </div>
        ))}
      </section>
    </div>
  );
}