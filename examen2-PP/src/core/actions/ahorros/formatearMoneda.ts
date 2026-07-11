export const formatearMoneda = (valor: number): string => {
  return new Intl.NumberFormat("es-HN", {
    style: "currency",
    currency: "HNL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
};

export const formatearPorcentaje = (valor: number): string => {
  return `${(valor * 100).toFixed(2)}%`;
};