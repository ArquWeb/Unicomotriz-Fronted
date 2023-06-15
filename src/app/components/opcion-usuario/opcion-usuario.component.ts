import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-opcion-usuario',
  templateUrl: './opcion-usuario.component.html',
  styleUrls: ['./opcion-usuario.component.css']
})
export class OpcionUsuarioComponent{

  constructor(private comunicacionService:ComunicacionService){}


  enviarVariable(tipoUsuario:string){
    this.comunicacionService.tipoUsuario= tipoUsuario;
  }
}
