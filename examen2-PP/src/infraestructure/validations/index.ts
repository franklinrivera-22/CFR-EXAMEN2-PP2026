import type { CamposFormulario, ErroresFormulario } from "../interfaces";

export const validarFormulario = (campos: CamposFormulario): ErroresFormulario => {
  const errores: ErroresFormulario = {};

  if (campos.depositoInicial.trim() === "") 
    {
        errores.depositoInicial = "El deposito inicial es obligatorio.";
    } 
  else if (Number.isNaN(Number(campos.depositoInicial))) 
    {
        errores.depositoInicial = "Ingresa un número válido.";
     } 
  else if (Number(campos.depositoInicial) <= 0) 
    {
        errores.depositoInicial = "El depósito inicial debe ser mayor a 0.";
    }

  if (campos.tasaInteresAnual.trim() === "") 
    {
        errores.tasaInteresAnual = "La tasa de interes es obligatoria.";
  } 
  else if (Number.isNaN(Number(campos.tasaInteresAnual))) 
    {
        errores.tasaInteresAnual = "Ingresa un número válido.";
     } 
  else if (Number(campos.tasaInteresAnual) <= 0) 
    {
        errores.tasaInteresAnual = "La tasa de interés debe ser mayor a 0.";
    }

  if (campos.plazoAños.trim() === "") 
    {
        errores.plazoAños = "El plazo es obligatorio.";
    } 
  else if (Number.isNaN(Number(campos.plazoAños))) 
    {
        errores.plazoAños = "Ingresa un número válido.";
    } 
  else if (Number(campos.plazoAños) <= 0) 
    {
        errores.plazoAños = "El plazo debe ser mayor a 0.";
    }

  return errores;
};