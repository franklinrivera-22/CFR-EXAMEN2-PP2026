export const calcularSaldoEnMes = (
  depositoInicial: number,
  tasaMensual: number,
  mes: number
): number => 
{
  return depositoInicial * Math.pow(1 + tasaMensual, mes);
};