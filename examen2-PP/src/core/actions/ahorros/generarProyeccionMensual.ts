
import type { DatosSimulacion, FilaMensual } from "../../../infraestructure/interfaces";
import { calcularSaldoEnMes } from "./calcularSaldo";

export const generarProyeccionMensual = (datos: DatosSimulacion): FilaMensual[] => 
{
  const { depositoInicial, tasaInteresAnual, plazoAños } = datos;
  const tasaMensual = tasaInteresAnual / 12;
  const totalMeses = plazoAños * 12;

  const filas: FilaMensual[] = [];
  for (let mes = 1; mes <= totalMeses; mes++) 
  {
    const saldoActual = calcularSaldoEnMes(depositoInicial, tasaMensual, mes);
    const saldoAnterior = calcularSaldoEnMes(depositoInicial, tasaMensual, mes - 1);
    filas.push({ mes, saldo: saldoActual, interesGenerado: saldoActual - saldoAnterior });
  }
  return filas;
};