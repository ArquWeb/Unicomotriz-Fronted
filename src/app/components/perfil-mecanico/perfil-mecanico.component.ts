import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mecanico } from 'src/app/models/mecanico';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';
import { MecanicoService } from 'src/app/services/mecanico/mecanico.service';

@Component({
  selector: 'app-perfil-mecanico',
  templateUrl: './perfil-mecanico.component.html',
  styleUrls: ['./perfil-mecanico.component.css']
})
export class PerfilMecanicoComponent implements OnInit {
  myForm!: FormGroup;
  mecanico!:Mecanico;
  idMecanico:any=this.comunicacionService.id;

  constructor(private formbuilder: FormBuilder,
    private mecanicoService: MecanicoService,
    private router: Router,
    private comunicacionService:ComunicacionService,
    private snack: MatSnackBar) { }

    ngOnInit(): void {
      this.mecanicoService.getMecanicoId(this.idMecanico)
        .subscribe((data)=>{
          this.mecanico=data;
          this.myForm = this.formbuilder.group({
            nombre: [this.mecanico.nombre,[Validators.required]],
            usuario: [this.mecanico.usuario,[Validators.required]],
            password: [this.mecanico.password,[Validators.required]],
            direccionTaller: [this.mecanico.direccionTaller, [Validators.required]],
            email: [this.mecanico.email, [Validators.required, Validators.email]],
          })
        })
    }

  update(): void {

    const mecanico: Mecanico = {
      id: 60,
      nombre: this.myForm.get("nombre")!.value,
      usuario: this.myForm.get("usuario")!.value,
      password: this.myForm.get("password")!.value,
      direccionTaller: this.myForm.get("direccionTaller")!.value,
      email: this.myForm.get("email")!.value,
    }
    this.mecanicoService.updateMecanico(this.idMecanico, mecanico).subscribe({
      next: (data) => {
        this.snack.open('Tu perfil se ha actualizado correctamente: ', 'OK', { duration: 3000 });
        this.router.navigate(["/perfil"+this.idMecanico]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
