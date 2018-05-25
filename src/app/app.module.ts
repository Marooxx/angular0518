// Modules d'Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Mes modules perso
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

// Mes components perso
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
