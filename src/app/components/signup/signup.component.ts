import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
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
      modeloVehiculo: ["",[Validators.required]],
      direccion: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      password: ["",[Validators.required]],

    })
  }

  addCliente(): void {


    const cliente: Cliente = {
      id: 999,
      nombre: this.myForm.get("nombre")!.value,
      apellido: this.myForm.get("apellido")!.value,
      email: this.myForm.get("email")!.value,
      modeloVehiculo: this.myForm.get("modeloVehiculo")!.value,
      direccion: this.myForm.get("direccion")!.value,
      ciudad: this.myForm.get("ciudad")!.value,
      password: this.myForm.get("password")!.value,
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
