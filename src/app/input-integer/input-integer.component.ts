import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{

  constructor() { }

  ngOnInit(): void{

  }

  @Input() // recibe el parametro []
  quantity!: number;

  @Input()
  max!: number;

  //emite un evento cada vez que se modifica una cantidad
  @Output()
  quantityChange = new EventEmitter<number>();

  //Evento cada vez que el llegó al maximo
  @Output()
  maxReached = new EventEmitter<number>();
  
  
  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity); //emite el evento
    }
    else{
      debugger;
      this.maxReached.emit(this.max);
    }
      
  } 
  downQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } 
  }
  changeQuantity(event: { key: any; }): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
 /*  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity; //le resta lo que se compro
    product.quantity = 0; // lo pone en 0 para la próxima compra

    console.log("entro a Beer-list.components");
    
  }*/
}
