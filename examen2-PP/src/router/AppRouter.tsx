import { Route, Routes } from "react-router";
import { Navbar } from "../presentation/components/layout/Navbar";
import { FormularioPage, ProyeccionMensualPage, ProyeccionAnualPage } from "../presentation/pages";
import type { DatosSimulacion, ResumenSimulacion } from "../infraestructure/interfaces";

interface Props {
  datosSimulacion: DatosSimulacion | null;
  resumen: ResumenSimulacion | null;
  onCalcular: (datos: DatosSimulacion) => void;
}

export const AppRouter = ({ datosSimulacion, resumen, onCalcular }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<FormularioPage resumen={resumen} onCalcular={onCalcular} />} />
        <Route path="/proyeccion-mensual" element={<ProyeccionMensualPage datos={datosSimulacion} />} />
        <Route path="/proyeccion-anual" element={<ProyeccionAnualPage datos={datosSimulacion} />} />
      </Routes>
    </div>
  );
};