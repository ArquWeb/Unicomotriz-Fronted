import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarroCompras } from 'src/app/models/carro-compra';

@Injectable({
  providedIn: 'root'
})
export class CarroCompraService {

  constructor(private http: HttpClient) { }

  getCarroCompra(){
    return this.http.get<CarroCompras>('http://localhost:3000/carroCompras')
  }
  getCarroCompraId(id: any){
    return this.http.get<CarroCompras>(`${'http://localhost:3000/carroCompras'}/${id}`)
  }

  deleteCarroCompra(id:any){
    return this.http.delete<CarroCompras>(`${'http://localhost:3000/carroCompras'}/${id}`);
  }
  addCarroCompra(carroCompra:CarroCompras){
    return this.http.post<CarroCompras>('http://localhost:3000/carroCompras', carroCompra);
  }
  updateCarroCompras(id:any, carroCompra:CarroCompras){
    return this.http.put<CarroCompras>(`${'http://localhost:3000/productos'}/${id}`, carroCompra);
  }

}
