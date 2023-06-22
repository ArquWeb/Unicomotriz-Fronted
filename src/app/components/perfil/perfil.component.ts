import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  myForm!: FormGroup;
  cliente!:Cliente;
  idCliente:any=this.comunicacionService.id;

  constructor(private formbuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private comunicacionService:ComunicacionService,
    private snack: MatSnackBar) { }

    ngOnInit(): void {
      this.clienteService.getClienteId(this.idCliente)
        .subscribe((data)=>{
          this.cliente=data;
          this.myForm = this.formbuilder.group({
            nombre: [this.cliente.nombre,[Validators.required]],
            apellido: [this.cliente.apellido,[Validators.required]],
            email: [this.cliente.email,[Validators.required,Validators.email]],
            direccion: [this.cliente.direccion, [Validators.required]],
            ciudad: [this.cliente.ciudad, [Validators.required]],
            marca: [this.cliente.vehiculo.marca, [Validators.required]],
            modeloVehiculo:[this.cliente.vehiculo.modeloVehiculo, [Validators.required]],
            placa: [this.cliente.vehiculo.placa, [Validators.required]],
            soat:[this.cliente.vehiculo.soat, [Validators.required]],
            revisionTecnica: [this.cliente.vehiculo.revisionTecnica, [Validators.required]],
            password: [this.cliente.password,[Validators.required]],
          })
        })
    }

  update(): void {
    const vehiculo1: Vehiculo = {
      id: 50,
      marca: this.myForm.get("marca")!.value,
      modeloVehiculo: this.myForm.get("modeloVehiculo")!.value,
      placa: this.myForm.get("placa")!.value,
      soat: this.myForm.get("soat")!.value,
      revisionTecnica: this.myForm.get("revisionTecnica")!.value,
    }

    const cliente: Cliente = {
      id: 60,
      nombre: this.myForm.get("nombre")!.value,
      apellido: this.myForm.get("apellido")!.value,
      email: this.myForm.get("email")!.value,
      direccion: this.myForm.get("direccion")!.value,
      ciudad: this.myForm.get("ciudad")!.value,
      password: this.myForm.get("password")!.value,
      vehiculo: vehiculo1,
    }
    this.clienteService.updateCliente(this.idCliente, cliente).subscribe({
      next: (data) => {
        this.snack.open('Tu perfil se ha actualizado correctamente: ', 'OK', { duration: 3000 });
        this.router.navigate(["/perfil"+this.idCliente]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
