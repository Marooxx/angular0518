// Modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components perso
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/error404/error404.component';

// Définition des routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'not-found', component: Error404Component},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // Pour afficher un debug des routes (dans la console du navigateur)
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
