import { CalendarDays, Inbox } from "lucide-react";
import { generarProyeccionAnual } from "../../../core/actions/ahorros/generarProyeccionAnual";
import { formatearMoneda } from "../../../core/actions/ahorros/formatearMoneda";
import type { DatosSimulacion } from "../../../infraestructure/interfaces";

interface Props {
  datos: DatosSimulacion | null;
}

export const ProyeccionAnualPage = ({ datos }: Props) => {
  if (!datos) {
    return (
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center gap-2 text-gray-500">
          <Inbox size={32} />
          <p>Aun no hay ninguna simulación calculada</p>
          <p className="text-sm">Dirigete al formulario y primero calcula tu cuenta de ahorros</p>
        </div>
      </div>
    );
  }

  const filas = generarProyeccionAnual(datos);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-gray-800 mb-1">
        <CalendarDays size={26} className="text-emerald-700" />
        PROYECCION ANUAL
      </h1>
      <p className="text-gray-600 mb-6">
        Saldo acumulado al cierre de cada año e intereses generados durante los {datos.plazoAños}{" "}
        {datos.plazoAños === 1 ? "año" : "años"} del plazo.
      </p>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-emerald-800 text-white">
              <tr>
                <th className="text-left px-4 py-2.5">Año</th>
                <th className="text-right px-4 py-2.5">Saldo al cierre</th>
                <th className="text-right px-4 py-2.5">Interés del año</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((fila) => (
                <tr key={fila.año} className="border-b border-gray-100 hover:bg-emerald-50">
                  <td className="px-4 py-2 text-gray-700">{fila.año}</td>
                  <td className="px-4 py-2 text-right font-medium text-gray-800">{formatearMoneda(fila.saldo)}</td>
                  <td className="px-4 py-2 text-right font-semibold text-emerald-600">+ {formatearMoneda(fila.interesGenerado)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};