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