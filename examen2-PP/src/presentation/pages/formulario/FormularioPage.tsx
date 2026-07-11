import { useState } from "react";
import { TrendingUp, Wallet, Calendar1, AlertCircle, CheckCircle2 } from "lucide-react";
import { validarFormulario } from "../../../infraestructure/validations";

import type {
  CamposFormulario,
  DatosSimulacion,
  ErroresFormulario,
  ResumenSimulacion,
} from "../../../infraestructure/interfaces";
import { formatearMoneda, formatearPorcentaje } from "../../../core/actions/ahorros/formatearMoneda";

interface Props {
  resumen: ResumenSimulacion | null;
  onCalcular: (datos: DatosSimulacion) => void;
}

const valoresIniciales: CamposFormulario = {
  depositoInicial: "",
  tasaInteresAnual: "",
  plazoAños: "",
};

export const FormularioPage = ({ resumen, onCalcular }: Props) => {
  const [campos, setCampos] = useState<CamposFormulario>(valoresIniciales);
  const [errores, setErrores] = useState<ErroresFormulario>({});

  const handleChange = (campo: keyof CamposFormulario, valor: string) => {
    setCampos((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleCalcular = () => {
    const erroresEncontrados = validarFormulario(campos);
    setErrores(erroresEncontrados);
    if (Object.keys(erroresEncontrados).length > 0) return;

    onCalcular({
      depositoInicial: Number(campos.depositoInicial),
      tasaInteresAnual: Number(campos.tasaInteresAnual) / 100,
      plazoAños: Number(campos.plazoAños),
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
        Simula tu cuenta de ahorros
      </h1>
      <p className="text-gray-600 mb-6">
        Ingresa el depósito inicial, la tasa de interés anual y el plazo para ver cuánto crecerá tu dinero.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCalcular();
          }}
          className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-4"
          noValidate
        >
          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-1">
              <Wallet size={16} className="text-emerald-700" />
              Depósito inicial (L)
            </label>
            <input
              type="number"
              step="0.01"
              value={campos.depositoInicial}
              onChange={(e) => handleChange("depositoInicial", e.target.value)}
              placeholder="Ej. 10000"
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                errores.depositoInicial ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-emerald-400"
              }`}
            />
            {errores.depositoInicial && (
              <p className="flex items-center gap-1 text-red-600 text-xs mt-1">
                <AlertCircle size={14} /> {errores.depositoInicial}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-1">
              <TrendingUp size={16} className="text-emerald-700" />
              Tasa de interés anual (%)
            </label>
            <input
              type="number"
              step="0.01"
              value={campos.tasaInteresAnual}
              onChange={(e) => handleChange("tasaInteresAnual", e.target.value)}
              placeholder="Ej. 5"
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                errores.tasaInteresAnual ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-emerald-400"
              }`}
            />
            {errores.tasaInteresAnual && (
              <p className="flex items-center gap-1 text-red-600 text-xs mt-1">
                <AlertCircle size={14} /> {errores.tasaInteresAnual}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-1">
              <Calendar1 size={16} className="text-emerald-700" />
              Plazo de la simulación (años)
            </label>
            <input
              type="number"
              step="1"
              value={campos.plazoAños}
              onChange={(e) => handleChange("plazoAños", e.target.value)}
              placeholder="Ej. 3"
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                errores.plazoAños ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-emerald-400"
              }`}
            />
            {errores.plazoAños && (
              <p className="flex items-center gap-1 text-red-600 text-xs mt-1">
                <AlertCircle size={14} /> {errores.plazoAños}
              </p>
            )}
          </div>

          <button type="submit" className="mt-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-md py-2.5 transition-colors">
            Calcular
          </button>
        </form>

        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
            <CheckCircle2 size={20} className="text-emerald-700" />
            Resumen general
          </h2>

          {resumen ? (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600">Depósito inicial</span>
                <span className="font-semibold text-gray-800">{formatearMoneda(resumen.depositoInicial)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600">Tasa de interés anual</span>
                <span className="font-semibold text-gray-800">{formatearPorcentaje(resumen.tasaInteresAnual)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600">Plazo</span>
                <span className="font-semibold text-gray-800">{resumen.plazoAños} {resumen.plazoAños === 1 ? "año" : "años"}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600">Monto final acumulado</span>
                <span className="font-bold text-emerald-700 text-lg">{formatearMoneda(resumen.montoFinal)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total de intereses ganados</span>
                <span className="font-bold text-emerald-600 text-lg">+ {formatearMoneda(resumen.interesTotal)}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Consulta el detalle mes a mes y año a año en las secciones de proyección.
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              Completa el formulario y presiona <strong>Calcular</strong> para ver el resumen de tu cuenta de ahorros.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};