import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor() { }

  public tipoUsuario!:string;
  public id!:any;

  private enviarVariableSubject = new Subject<any>();
  enviarVariableObservable =this.enviarVariableSubject.asObservable();

  enviarVariable(tipoUsuario:string){
    this.tipoUsuario=tipoUsuario;
    this.enviarVariableSubject.next(tipoUsuario);
  }

  enviarId(id:any){
    this.id=id;
    this.enviarVariableSubject.next(id);
  }

}
