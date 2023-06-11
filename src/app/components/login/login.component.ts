import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myform!:FormGroup;
  email!: string;
  password!: string;
  clientes!:Cliente[];
  esValido!: boolean;

  constructor(private formBuilder:FormBuilder,
    private clienteService:ClienteService,
    private router:Router){}

  ngOnInit(): void {
      this.loadMyForm();
      this.esValido = true;
  }

  loadMyForm(){
    this.myform=this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.max(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    })
  }

  verificarUsuario(): void {
    this.email = this.myform.get('email')?.value;
    this.password = this.myform.get('password')?.value;
    this.clienteService.getCLientes().subscribe(
      (data: Cliente[]) => {
        let auxcliente= data.find(x => x.email == this.email && x.password == this.password);
        if (auxcliente) {
          this.router.navigate(["opciones"]);
        }
      }
    );
    this.esValido = false;
  }


  hide = true;
}
