import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

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

  constructor() {
    this.voted = new EventEmitter<number>();
  }

  /**
   * On réagit au vote
   * @param note
   */
  private onVoted(note: number): void {
    console.log('Nouveau vote (show) : ' + note);
    this.voted.emit(note);
  }

}
