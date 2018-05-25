import { Component } from '@angular/core';
import { Product, TAB_PRODUCTS } from '../../model/product';
import { ProductService } from '../product.service';

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

  // Propriétés pour la moyenne
  private moyenne: number;
  private notes;

  constructor(productService: ProductService) {
    // Initialisation le tableau de produits
    this.products = productService.getProducts();
    // Si on veut un tableau vide
    // this.products = [];
    // this.products = null;

    // Initialisation de la moyenne
    this.moyenne = 0;
    this.notes = [];
  }

  private updateMoyenne(newNote: number): void {
    console.log('Nouvelle note reçue : ' + newNote);
    this.calculateMoyenne(newNote);
  }

  private calculateMoyenne(note: number): void {
    let somme = 0;
    this.notes.push(note);
    this.notes.forEach((elem) => somme += parseInt(elem, 10));
    this.moyenne = somme / this.notes.length;
  }

}
