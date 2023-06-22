import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  productos:Producto[] =this.getProductos();
  constructor(private productoService:ProductoService){}

  ngOnInit(): void {

  }

  getProductos():Producto[]{
    this.productoService.getProductos().subscribe(
      (data:Producto[])=>{
        this.productos=data;

      }
    )
    return this.productos;
  }


}
