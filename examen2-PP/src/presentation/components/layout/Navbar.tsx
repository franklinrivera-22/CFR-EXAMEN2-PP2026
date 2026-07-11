import { Calendar, CalendarDays, PiggyBank } from "lucide-react";
import { Link, useLocation } from "react-router";
const enlaces = 
[
  { to: "/", texto: "Formulario", icono: PiggyBank },
  { to: "/proyeccion-mensual", texto: "Proyección mensual", icono: Calendar },
  { to: "/proyeccion-anual", texto: "Proyección anual", icono: CalendarDays },
];

export const Navbar = () => 
{
  const location = useLocation();

  return 
  (
    <nav className="bg-emerald-800 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
          <span className="font-bold text-lg flex items-center gap-2">
        <PiggyBank size={22} />
            CALCULADORA DE AHORROS
          </span>
          <div className="flex flex-wrap gap-1">
            {enlaces.map(({ to, texto, icono: Icono }) => 
            {
              const activo = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm transition-colors ${activo ? "bg-emerald-600 text-white" : "text-emerald-100 hover:bg-emerald-700"}`}>
                  <Icono size={16} />
                  {texto}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};