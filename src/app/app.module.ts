// Modules d'Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Mes modules perso
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

// Mes components perso
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/error404/error404.component';

// Module pour l'API mémoire
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
