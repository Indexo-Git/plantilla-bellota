export interface CodeBankType {
  name: string;
  code: string;
}

export interface condPagoType {
  codigo: string;
  dias?: number;
  descripcion: string;
}

export interface refacturarInterface {
  prefijo: string;
  numero: string;
}

export interface interfaceLeadTime {
  codProveedor?: number;
  nombreProveedor: string;
  diasFabricacion: number;
  diasTransito: number;
}

export interface RecordProviderType {
  xml: string;
  fecha: string;
  estado: string;
  origen: string;
  respuesta: string;
  id: number;
  cambios: Array<{ key: string, value: any }>
}