import { Component, OnInit, numberAttribute } from '@angular/core';
import { Product } from '../Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  /*
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
                  {
                    cod: 1100,
                    description: "Galleta de Chocolate x 150gr",
                    mark: "Chocolinas",
                    price: 350,
                    stock: 15,
                    image: "assets/img/salado.jpeg",
                    clearance: false,
                    quantity: 0,
                  },
                  {
                    cod: 1101,
                    description: "Alfajor de Maicena x 50gr",
                    mark: "Guaymallén",
                    price: 120,
                    stock: 20,
                    image: "assets/img/salado.jpeg",
                    clearance: false,
                    quantity: 0,
                  },
    ];
    */
    //comparten la misma instancia de cart cart.componet y product-list.component 
    constructor(private cart: ProductCartService,
                private productsDataService: ProductDataService
    ){

    }
    //ciclo de vida del componente
    //se dispara cuando el componente aparece en pantalla
    ngOnInit(): void{
      //mi arreglo de productos se convierte en el que viene de mi observable
      this.productsDataService.getAll()
      .subscribe(products => this.products = products);
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