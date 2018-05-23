import { Component, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent {

  @Input() private product: Product;

  constructor() { }


}
