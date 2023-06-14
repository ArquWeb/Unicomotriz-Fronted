import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mecanico } from 'src/app/models/mecanico';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  constructor(private http: HttpClient) { }

  getMecanicos(){
    return this.http.get<Mecanico[]>('http://localhost:3000/mecanicos')
  }
  getMecanicoId(id: any){
    return this.http.get<Mecanico>(`${'http://localhost:3000/mecanicos'}/${id}`)
  }

  deleteMecanico(id:any){
    return this.http.delete<Mecanico>(`${'http://localhost:3000/mecanicos'}/${id}`);
  }
  addMecanico(mecanico:Mecanico){
    return this.http.post<Mecanico>('http://localhost:3000/mecanicos', mecanico)
  }
}
