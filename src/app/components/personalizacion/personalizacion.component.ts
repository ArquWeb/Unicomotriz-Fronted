import { Component } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.component.html',
  styleUrls: ['./personalizacion.component.css']
})
export class PersonalizacionComponent {
  constructor(private comunicacionService:ComunicacionService){}

  idCliente:any=this.comunicacionService.id;
}
