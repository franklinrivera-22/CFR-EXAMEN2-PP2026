import type { DatosSimulacion, ResumenSimulacion } from "../../../infraestructure/interfaces";
import { calcularSaldoEnMes } from "./calcularSaldo";


export const calcularResumen = (datos: DatosSimulacion): ResumenSimulacion => {
  const { depositoInicial, tasaInteresAnual, plazoAños } = datos;
  const tasaMensual = tasaInteresAnual / 12;
  const totalMeses = plazoAños * 12;
  const montoFinal = calcularSaldoEnMes(depositoInicial, tasaMensual, totalMeses);
  const interesTotal = montoFinal - depositoInicial;

  return { depositoInicial, montoFinal, interesTotal, plazoAños, tasaInteresAnual };
};