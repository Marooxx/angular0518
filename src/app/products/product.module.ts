// Module d'angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Le moule de routing des produits
import { ProductRoutingModule } from './product-routing.module';

// Les components liés aux produits
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductShowComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
