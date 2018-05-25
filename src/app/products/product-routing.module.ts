// Modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components liés aux produits
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShowComponent } from './product-show/product-show.component';

// Les routes des produits
const productRoutes: Routes = [
  { path: 'produits', component: ProductListComponent },
  { path: 'produit/:id' , component: ProductShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
