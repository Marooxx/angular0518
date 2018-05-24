// Modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components perso
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductShowComponent } from './product-show/product-show.component';

// Définition des routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produits', component: ProductListComponent },
  { path: 'produit/:id' , component: ProductShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // Pour afficher un debug des routes
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
