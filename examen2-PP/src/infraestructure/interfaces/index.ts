export interface DatosSimulacion {
  depositoInicial: number;
  tasaInteresAnual: number;
  plazoAños: number;
}

export interface ErroresFormulario {
  depositoInicial?: string;
  tasaInteresAnual?: string;
  plazoAños?: string;
}

export interface CamposFormulario {
  depositoInicial: string;
  tasaInteresAnual: string;
  plazoAños: string;
}

export interface FilaMensual {
  mes: number;
  saldo: number;
  interesGenerado: number;
}

export interface FilaAnual {
  año: number;
  saldo: number;
  interesGenerado: number;
}

export interface ResumenSimulacion {
  depositoInicial: number;
  montoFinal: number;
  interesTotal: number;
  plazoAños: number;
  tasaInteresAnual: number;
}