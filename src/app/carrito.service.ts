import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto} from './productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: Producto[] = [];
  constructor(private http: HttpClient) {}

  obtenerPreciosDeEnvio(){
    return this.http.get <{tipo: string, precio: number}[]>('/assets/shipping.json')
  }

  agregarAlCarrito(producto:Producto){
    this.items.push(producto);
  }
  getItems(){
    return this.items;
  }
  limpiarCarrito(){
    this.items =[];
    return this.items;
  }
}

function limpiarCarrito() {
throw new Error('Function not implemented.');
}
