import type { DatosSimulacion, FilaAnual } from "../../../infraestructure/interfaces";
import { calcularSaldoEnMes } from "./calcularSaldo";


export const generarProyeccionAnual = (datos: DatosSimulacion): FilaAnual[] => {
  const { depositoInicial, tasaInteresAnual, plazoAños } = datos;
  const tasaMensual = tasaInteresAnual / 12;

  const filas: FilaAnual[] = [];
  for (let año = 1; año <= plazoAños; año++) {
    const saldoAnual = calcularSaldoEnMes(depositoInicial, tasaMensual, año * 12);
    const saldoAñoAnterior = calcularSaldoEnMes(depositoInicial, tasaMensual, (año - 1) * 12);
    filas.push({ año: año, saldo: saldoAnual, interesGenerado: saldoAnual - saldoAñoAnterior });
  }
  return filas;
};