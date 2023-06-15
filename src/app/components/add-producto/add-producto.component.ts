import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {
  hide = true;
  myForm!: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private productoService: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm(): void{
    this.myForm = this.formbuilder.group({
      nombre: ["",[Validators.required]],
      descripcion: ["",[Validators.required]],
      precio: ["",[Validators.required]],
      imagen: ["", [Validators.required]],
    })
  }

  addProducto(): void {

    const producto: Producto = {
      id: 51,
      nombre: this.myForm.get("nombre")!.value,
      descripcion: this.myForm.get("descripcion")!.value,
      precio: this.myForm.get("precio")!.value,
      imagen: this.myForm.get("imagen")!.value,
    }
    this.productoService.addProducto(producto).subscribe({
      next: (data) => {
        this.router.navigate(["/listaProducto"]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
