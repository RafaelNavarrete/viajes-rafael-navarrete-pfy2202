import EtiquetaDisponibilidad from "./EtiquetaDisponibilidad";
import { formatearPrecio, formatearFecha } from "../utils/formato";

export default function VueloCard({ vuelo }) {
  return (
    <article className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold">{vuelo.aerolinea}</h3>
        <EtiquetaDisponibilidad disponible={vuelo.disponible} />
      </div>
      <p className="text-sm text-gray-600">Origen: {vuelo.origen}</p>
      <p className="text-sm">Salida: {formatearFecha(vuelo.fechaSalida)}</p>
      <p className="text-sm">Regreso: {formatearFecha(vuelo.fechaRegreso)}</p>
      <p className="text-xl font-bold text-green-700 mt-2">{formatearPrecio(vuelo.precio)}</p>
    </article>
  );
}