import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';
import { CarroCompraService } from 'src/app/services/carro-compra/carro-compra.service';
import { CarroCompras } from 'src/app/models/carro-compra';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  idCliente:any=this.comunicacionService.id;
  filtro: string = '';
  constructor(private productoService:ProductoService,
    private comunicacionService:ComunicacionService,
    private carroCompraService:CarroCompraService,
    private snack:MatSnackBar){}

  productos$!: Observable<Producto[]>;
  producto!:Producto;
  carroCompra!:CarroCompras;
  ngOnInit() {
    this.productos$ = this.getProductos();
  }

  getProductos(): Observable<Producto[]> {
    return this.productoService.getProductos().pipe(
      map((productos: Producto[]) =>
        productos.filter((producto: Producto) =>
          producto.nombre.toLowerCase().includes(this.filtro.toLowerCase())
        )
      )
    );
  }

  addCarroCompra(idProducto:any): void {

    this.productoService.getProductoId(idProducto).subscribe(
      (data:Producto)=>{
        this.producto=data;
      }
    )
    //si ya existe un carro de compra
    if(this.carroCompraService.getCarroCompra() != null){

      this.carroCompraService.getCarroCompra().subscribe(
        (data:CarroCompras)=>{
          this.carroCompra=data;

        }
      )
      let arr:Producto[]=this.carroCompra.productos;
      let Total:number=this.carroCompra.montoTotal;

      const aux:CarroCompras={
        id:1,
        montoTotal: Total + this.producto.precio,
        productos: arr,
      }
      this.snack.open('hola','OK',{duration: 3000});
      aux.productos.push(this.producto);

      this.carroCompraService.updateCarroCompras(1,aux).subscribe({
        next: (data) => {
          this.snack.open('Se ha agregado correctamente','OK',{duration: 3000});

        },
        error: (err) => {
          console.log(err);

        }
      })

    }
    //en caso no exista un carro compras
    if (this.carroCompraService.getCarroCompra() == null){
      this.snack.open('hola2','OK',{duration: 3000});
      const aux:CarroCompras={
        id:1,
        montoTotal: this.producto.precio,
        productos:[],
      }

      aux.productos.push(this.producto);

      this.carroCompraService.addCarroCompra(aux).subscribe({
        next: (data) => {
          this.snack.open('Se ha agregado correctamente','OK',{duration: 3000});
        },
        error: (err) => {
          console.log(err);
        }
      })
    }


  }

}
