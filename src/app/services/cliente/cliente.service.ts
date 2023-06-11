import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCLientes(){
    return this.http.get<Cliente[]>('http://localhost:3000/clientes')
  }
  getClienteId(id: any){
    return this.http.get<Cliente>(`${'http://localhost:3000/clientes'}/${id}`)
  }

  deleteCliente(id:any){
    return this.http.delete<Cliente>(`${'http://localhost:3000/clientes'}/${id}`);
  }
  addCliente(cliente:Cliente){
    return this.http.post<Cliente>('http://localhost:3000/clientes', cliente)
  }
}
