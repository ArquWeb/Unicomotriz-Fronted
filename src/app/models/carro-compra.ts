import { Producto } from "./producto";

export interface CarroCompras{
  id: number;
  montoTotal: number;
  productos:Producto[];
}
