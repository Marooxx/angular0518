import { Component } from '@angular/core';
import { Product, PRODUCT_TEST, TAB_PRODUCTS } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // Tableau de produits
  private products: Product[];
  // Produit sélectionné (null par défaut)
  public selectedProduct: Product;

  constructor() {
    // Initialisation le tableau de produits
    this.products = TAB_PRODUCTS;
    // On automatisera la sélection du produit ASAP
    // this.selectedProduct = PRODUCT_TEST;
  }

}
