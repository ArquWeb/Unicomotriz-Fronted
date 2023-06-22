import { Component } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-nav-mecanico',
  templateUrl: './nav-mecanico.component.html',
  styleUrls: ['./nav-mecanico.component.css']
})
export class NavMecanicoComponent {
  constructor(private comunicacionService:ComunicacionService){}

  id:any=this.comunicacionService.id;
}
