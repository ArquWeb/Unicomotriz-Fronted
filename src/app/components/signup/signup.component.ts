import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  hide = true;
  myForm!: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm(): void{
    this.myForm = this.formbuilder.group({
      nombre: ["",[Validators.required]],
      apellido: ["",[Validators.required]],
      email: ["",[Validators.required,Validators.email]],
      direccion: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      marca: ["", [Validators.required]],
      modeloVehiculo:["", [Validators.required]],
      placa: ["", [Validators.required]],
      soat:["", [Validators.required]],
      revisionTecnica: ["", [Validators.required]],
      password: ["",[Validators.required]],

    })
  }

  addCliente(): void {
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
    this.clienteService.addCliente(cliente).subscribe({
      next: (data) => {
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
