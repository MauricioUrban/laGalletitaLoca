import { Component, OnInit, numberAttribute } from '@angular/core';
import { Product } from '../Product';
import { ProductCartService } from '../product-cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [
      {
      cod:1000,
      description:"Bizcocho Salado x 200gr",
      mark: "Don Satur",
      price:450,
      stock:10,
      image: "assets/img/salado.jpeg",
      clearance: false,
      quantity: 0,
      },
      {
        cod:1001,
        description:"Bizcocho Agridulce x 200gr",
        mark: "Don Satur",
        price:450,
        stock:5,
        image: "assets/img/agridulce.jpeg",
        clearance: false,
        quantity: 0,
        },
        {
          cod:1002,
          description:"Bizcocho Negrito x 200gr",
          mark: "Don Satur",
          price:450,
          stock:0,
          image: "assets/img/negrito.jpeg",
          clearance: true,
          quantity: 0,
          },
          {
            cod:1003,
            description:"Bizcocho Queso x 200gr",
            mark: "Don Satur",
            price:450,
            stock:18,
            image: "assets/img/queso.jpeg",
            clearance: false,
            quantity: 0,
            },
            {
              cod:1004,
              description:"Bizcocho Light x 200gr",
              mark: "Don Satur",
              price:450,
              stock:10,
              image: "assets/img/light.jpeg",
              clearance: true,
              quantity: 0,
              },
              {
                cod:1005,
                description:"Bizcocho Salado x 200gr",
                mark: "Don Satur",
                price:450,
                stock:0,
                image: "assets/img/salado.jpeg",
                clearance: false,
                quantity: 0,
                },
                {
                  cod:1006,
                  description:"Bizcocho Salado x 200gr",
                  mark: "Don Satur",
                  price:450,
                  stock:10,
                  image: "assets/img/salado.jpeg",
                  clearance: false,
                  quantity: 0,
                  },
    ];
    
    //comparten la misma instancia de cart cart.componet y product-list.component 
    constructor(private cart: ProductCartService){

    }

    ngOnInit(): void{

    }

    addToCart(product: Product) : void{
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;

    }

    maxReached($event: number) {
      alert("No se puede comprar más de: " + $event);
      }

}