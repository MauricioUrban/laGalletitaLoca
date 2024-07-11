import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './Product';
import { isNull } from 'node:util';

const URL = 'https://60d8be5feec56d00174774b7.mockapi.io/lagalletitaloca';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }
  
  /*
  * consume una API y devuelve un observable 
  */
  public getAll(): Observable<Product[]>{

    return this.http.get<Product[]>(URL)
              .pipe(
                tap((products: Product[]) => {
                  products.forEach(product => {
                    product.quantity = 0;
                    if (!product.image)
                      product.image = 'assets/img/salado.jpeg';
                  });
                })
              );
  }

}
