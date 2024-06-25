import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articulos',
    pathMatch: 'full'
  },
  {
    path: 'articulos',
    component: ProductsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'cart',
    component: CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
