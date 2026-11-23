export default function EtiquetaDisponibilidad({ disponible }) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
        disponible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-700"
      }`}
    >
      {disponible ? "Disponible" : "Agotado"}
    </span>
  );
}