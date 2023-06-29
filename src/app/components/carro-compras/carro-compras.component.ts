import { Component } from '@angular/core';
import { CarroCompras } from 'src/app/models/carro-compra';
import { Producto } from 'src/app/models/producto';
import { CarroCompraService } from 'src/app/services/carro-compra/carro-compra.service';
import { ComunicacionService } from 'src/app/services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent {
  idCliente:any=this.comunicacionService.id;
  carro!:CarroCompras;

  productos!:Producto[];
  constructor(private carroCompraService:CarroCompraService,
    private comunicacionService:ComunicacionService){}

  ngOnInit() {
    this.getCarroCompra();
  }

  getCarroCompra():void{
    this.carroCompraService.getCarroCompra().subscribe(
      (data:CarroCompras)=>{
        this.carro=data;
      }
    )


    for(let item of this.carro.productos){
      this.productos.push(item);
    }
  }




}

