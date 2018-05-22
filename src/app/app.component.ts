import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = `Bienvenue sur ma page d'accueil`;
  content: string;
  url: string;
  isEditable: boolean;

  constructor() {
    this.content = `But <strong>I must explain</strong> to you how all this mistaken
    idea of denouncing pleasure and praising pain was born and I will
    give you a complete account of the system, and expound the actual
    teachings of the great explorer of the `;

    this.url = 'https://www.ecosia.org/';

    this.isEditable = true;
  }

  public changeStyle() {
    this.isEditable = !this.isEditable;
  }
}
