import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-2xl font-bold mb-2">Página no encontrada</h1>
      <Link to="/" className="text-green-700 underline">
        Volver al inicio
      </Link>
    </div>
  );
}