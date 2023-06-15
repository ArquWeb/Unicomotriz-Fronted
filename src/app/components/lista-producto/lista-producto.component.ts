import { Component, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent {
  displayedColumns: string[] = ['nombre', 'descripcion','precio','imagen','action1','action2'];
  dataSource = new MatTableDataSource<Producto>();

  constructor(private productoService: ProductoService){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos().subscribe((data:Producto[])=>{
      this.dataSource.data=data;
    });
  }

  deleteProducto(id:number){
    this.productoService.deleteProducto(id).subscribe(() =>{
      this.dataSource.data =this.dataSource.data.filter((e:Producto) =>{
        return e.id !== id ? e:false;
      });
    });
  }
}
