import { Link, NavLink } from "react-router";

const claseLink = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition ${
    isActive ? "bg-white text-green-700" : "text-white hover:bg-green-600"
  }`;

export default function Navbar() {
  return (
    <header className="bg-green-700 shadow">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Link to="/" className="text-white text-xl font-bold">
          Agencia de Viajes
        </Link>
        <div className="flex gap-2">
          <NavLink to="/" end className={claseLink}>
            Inicio
          </NavLink>
          <NavLink to="/destinos" className={claseLink}>
            Destinos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}