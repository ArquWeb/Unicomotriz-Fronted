import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Mecanico } from 'src/app/models/mecanico';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';
import { MecanicoService } from 'src/app/services/mecanico/mecanico.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  id!:any;
  myform!:FormGroup;
  email!: string;
  password!: string;
  clientes!:Cliente[];
  esValido!: boolean;

  tipoUsuario!:string;

  constructor(private formBuilder:FormBuilder,
    private clienteService:ClienteService,
    private mecanicoService:MecanicoService,
    private comunicacionService:ComunicacionService,
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

    if(this.comunicacionService.tipoUsuario=="cliente")
    {
      this.clienteService.getCLientes().subscribe(
        (data: Cliente[]) => {
          let auxcliente= data.find(x => x.email == this.email && x.password == this.password);
          this.id=auxcliente?.id;
          this.comunicacionService.id=this.id;
          if (auxcliente) {
            this.router.navigate(['mantenimiento/'+this.id]);
          }
        }
      );
    }

    if(this.comunicacionService.tipoUsuario=="mecanico")
    {
      this.mecanicoService.getMecanicos().subscribe(
        (data: Mecanico[]) => {
          let auxmecanico= data.find(x => x.email == this.email && x.password == this.password);
          this.id=auxmecanico?.id;
          this.comunicacionService.id=this.id;
          if (auxmecanico) {
            this.router.navigate(["listaProducto"]);
          }
        }
      );
    }

    this.esValido = false;
  }
  hide = true;


}
