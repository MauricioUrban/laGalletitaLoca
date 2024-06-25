import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

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
    

}