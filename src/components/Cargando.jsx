export default function Cargando({ texto = "Cargando..." }) {
  return (
    <div className="flex flex-col items-center py-16 text-gray-500">
      <div className="h-10 w-10 rounded-full border-4 border-green-200 border-t-green-600 animate-spin mb-3" />
      <p>{texto}</p>
    </div>
  );
}