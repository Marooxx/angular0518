import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} | Observable<{}> | Promise<{}> {

    const products: Product[] = [
      new Product(2, 'Hamac', 'Pour se reposer après une semaine d\'Angular'),
      new Product(3, 'Voiture', 'Véhicule à 4 roues avec un moteur et un volant'),
      new Product(4, 'Tongue', 'Chaussure d\'été'),
      new Product(5, 'Vélo', 'Moyen de transport à 2 roues (ou 4)'),
      new Product(6, 'Moto', 'Véhicule à 2 roues (ou 3)'),
      new Product(7, 'Avion', 'Moyen de transport volant (passager ou fret)'),
  ];

    return { products };
  }
  constructor() { }
}
