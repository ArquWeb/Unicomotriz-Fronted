import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit{
  idCliente!:number;
  nombre!:string;
  apellido!:string;
  email!:string;
  direccion!:string;
  ciudad!:string;
  marca!:string;
  modelo!:string;
  placa!:string;
  soat:Date=new Date();

  revision!:Date;
  renovacionRevision!:Date;

  fecha:Date=new Date();

  constructor(private activated: ActivatedRoute,
    private clienteService:ClienteService,
    private router: Router) {}

  ngOnInit(): void {
      this.idCliente=this.activated.snapshot.params['id'];
      this.clienteService.getClienteId(this.idCliente).subscribe(
        (data: Cliente)=>{
          this.nombre=data.nombre.toUpperCase();
          this.apellido=data.apellido.toUpperCase();
          this.email=data.email.toUpperCase();
          this.direccion=data.direccion.toUpperCase();
          this.ciudad=data.ciudad.toUpperCase();
          this.marca=data.vehiculo.marca.toUpperCase();
          this.modelo=data.vehiculo.modeloVehiculo.toUpperCase();
          this.placa=data.vehiculo.placa.toUpperCase();
          this.soat=data.vehiculo.soat;
          this.revision=data.vehiculo.revisionTecnica;

        }
      )
  }


}
