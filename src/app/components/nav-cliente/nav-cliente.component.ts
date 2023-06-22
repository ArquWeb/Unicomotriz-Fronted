import { Component } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-nav-cliente',
  templateUrl: './nav-cliente.component.html',
  styleUrls: ['./nav-cliente.component.css']
})
export class NavClienteComponent {
  constructor(private comunicacionService:ComunicacionService){}

  id:any=this.comunicacionService.id;

}
