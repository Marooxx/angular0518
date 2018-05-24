// Modules d'angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Modèle perso
import { Product, TAB_PRODUCTS } from '../model/product';
import { isNavigationCancelingError } from '@angular/router/src/shared';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent {

  // Propriété entrante passée par le parent
  @Input()  private product: Product;
  // Evenement sortant pour le parent
  @Output() private voted: EventEmitter<number>;

  constructor(
    route: ActivatedRoute
  ) {
    // Initialisation de l'événément pour le parent
    this.voted = new EventEmitter<number>();

    // Récupération de l'id passé en paramètre de la route
    const id: number = parseInt(route.snapshot.paramMap.get('id'), 10);
    console.log(`Le nombre correspondant à l'id passé dans la route est : ${id}`);

    if (!isNaN(id)) {
      this.getProduct(id);
    } else {
      throw new Error(`L'id passé est incorrecte.`);
    }
  }

  /**
   * On réagit au vote
   * @param note
   */
  private onVoted(note: number): void {
    console.log('Nouveau vote (show) : ' + note);
    this.voted.emit(note);
  }

  /**
   * Cette méthode essaye de charger un produit par rapport à son id
   * @param id
   */
  private getProduct(id: number): void {
    const products: Product[] = TAB_PRODUCTS;
    const tableauTrie = products.filter(
      function(elem) {
        if (elem.id === id) {
          return true;
        } else {
          return false;
        }
      }
    );

    // Syntaxe ES6
    // products = products.filter(elem => elem.id === id);

    if (tableauTrie.length === 1) {
      this.product = tableauTrie[0];
    } else {
      throw new Error('Produit non-trouvé (ou plusieurs)');
    }

  }

}
