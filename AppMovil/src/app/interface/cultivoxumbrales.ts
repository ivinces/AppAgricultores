export interface CultivoxUmbrales {
    id_umbrales: string;
    temp_min: number;
    temp_max: number;
    humedad_min: number;
    humedad_max: number;
    radiacion_uv_min: number;
    radiacion_uv_max: number;
    activo: boolean;
    nombre: string;
    descripcion: string;
    nodo_central: string;
    id_cultivo: string;
}