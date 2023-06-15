import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor() { }

  public tipoUsuario!:string;

  private enviarVariableSubject = new Subject<string>();
  enviarVariableObservable =this.enviarVariableSubject.asObservable();

  enviarVariable(tipoUsuario:string){
    this.tipoUsuario=tipoUsuario;
    this.enviarVariableSubject.next(tipoUsuario);
  }
}
