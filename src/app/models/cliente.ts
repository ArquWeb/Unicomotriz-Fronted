import { Vehiculo } from "./vehiculo";

export interface Cliente{
  id: number;
  nombre: string;
  apellido: string;
  email:string;
  direccion: string;
  ciudad: string;
  password: string;
  vehiculo:Vehiculo;
}
