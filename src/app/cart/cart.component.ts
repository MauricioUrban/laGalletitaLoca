import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartList: Product[] = [];
  //comparten la misma instancia de cart cart.componet y product-list.component 
  constructor(private cart: ProductCartService){
    cart.cartList.subscribe((observableC)=> this.cartList = observableC)

  }

  ngOnInit(): void{

  }

}
