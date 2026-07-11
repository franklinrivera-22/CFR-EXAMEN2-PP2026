import { useState } from "react";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { calcularResumen } from "./core/actions/ahorros/calcularResumen";
import type { DatosSimulacion, ResumenSimulacion } from "./infraestructure/interfaces";

function App() {
  const [datosSimulacion, setDatosSimulacion] = useState<DatosSimulacion | null>(null);
  const [resumen, setResumen] = useState<ResumenSimulacion | null>(null);

  const handleCalcular = (datos: DatosSimulacion) => {
    setDatosSimulacion(datos);
    setResumen(calcularResumen(datos));
  };

  return (
    <BrowserRouter>
      <AppRouter
        datosSimulacion={datosSimulacion}
        resumen={resumen}
        onCalcular={handleCalcular}
      />
    </BrowserRouter>
  );
}

export default App;