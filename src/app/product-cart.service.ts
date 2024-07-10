import { Injectable } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject } from 'rxjs';

/*
* Maneja la logica del carrito
*/

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  // voy a observar los valores del listado del carrito
  //convertimos la variable en privada para poder usar un Behavior
  private _cartList: Product[] = [];
  //cartList pasa a ser observable Behavior
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList); 

  constructor() { }

  addToCart(product: Product) {
    // find me busca un producto si esta dentro del listado de productos
    let item: Product | undefined = this._cartList.find((v1) => v1.description == product.description);

    if (!item){
      this._cartList.push({... product});
    } else{
      item.quantity += product.quantity;
    }
    console.log(this._cartList);
    //emito nuevo valor "next", la variable privada
    this.cartList.next(this._cartList);
  }
  
}
