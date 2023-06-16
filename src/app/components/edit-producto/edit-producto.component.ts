import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {
  myForm!: FormGroup;
  producto!:Producto;
  idProducto!:any;

  constructor(private formbuilder: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.paramMap.get('id');
    this.productoService.getProductoId(this.idProducto)
      .subscribe((data)=>{
        this.producto=data;
        this.myForm = this.formbuilder.group({
          nombre: [this.producto.nombre,[Validators.required]],
          descripcion: [this.producto.descripcion,[Validators.required]],
          precio: [this.producto.precio,[Validators.required]],
          imagen: [this.producto.imagen, [Validators.required]],
        })
      })
  }
  update(){
    const producto: Producto = {
      id: this.idProducto,
      nombre: this.myForm.get("nombre")!.value,
      descripcion: this.myForm.get("descripcion")!.value,
      precio: this.myForm.get("precio")!.value,
      imagen: this.myForm.get("imagen")!.value,
    }
    this.productoService.updateProducto(this.idProducto, producto).subscribe({
      next: (data) => {
        this.router.navigate(["/listaProducto"]);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
