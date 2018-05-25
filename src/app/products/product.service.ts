import { Injectable } from '@angular/core';
import { TAB_PRODUCTS, Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * Retourne la liste des produits depuis un tableau en mémoire
   */
  public getProducts(): Product[] {
    console.log('Utilisation de ProductService::getProducts');
    return TAB_PRODUCTS;
  }

}
