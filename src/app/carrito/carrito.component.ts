import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  items = this.carritoService.getItems();
  total = 0;
  constructor(private carritoService: CarritoService){}
  ngOnInit(){
    for (let item of this.items){
      this.total += item.precio;
    }
  }
}
