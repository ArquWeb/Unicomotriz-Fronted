import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>('http://localhost:3000/productos')
  }
  getProductoId(id: any){
    return this.http.get<Producto>(`${'http://localhost:3000/productos'}/${id}`)
  }

  deleteProducto(id:any){
    return this.http.delete<Producto>(`${'http://localhost:3000/productos'}/${id}`);
  }
  addProducto(producto:Producto){
    return this.http.post<Producto>('http://localhost:3000/productos', producto)
  }
}
