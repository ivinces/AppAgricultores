export interface CultivoxNodoxReg {
    id_registro: string;
    fecha_hora: string;
    temperatura: number;
    humedad: number;
    radiacion: number;
    id_nodo: string;
    latitud: number;
    longitud: number;
    n_activo: boolean;
    c_activo: boolean;
    cod_nodo: string;
    nombre: string;
    descripcion: string;
    nodo_central: string;
    id_cultivo: string;
}