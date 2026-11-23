import EtiquetaDisponibilidad from "./EtiquetaDisponibilidad";
import { formatearPrecio, formatearFecha } from "../utils/formato";

export default function HotelCard({ hotel }) {
  return (
    <article className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold">{hotel.nombre}</h3>
        <EtiquetaDisponibilidad disponible={hotel.disponible} />
      </div>
      <p className="text-sm text-gray-600">{hotel.estrellas} estrellas</p>
      <p className="text-sm">
        Fechas: {formatearFecha(hotel.fechaDesde)} al {formatearFecha(hotel.fechaHasta)}
      </p>
      <p className="text-xl font-bold text-green-700 mt-2">
        {formatearPrecio(hotel.precioNoche)}{" "}
        <span className="text-sm font-normal text-gray-500">por noche</span>
      </p>
    </article>
  );
}