import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  // Propriétés pour tester l'affichage de propriétés dans le template
  private title = `Bienvenue sur ma page d'accueil`;
  private content: string;
  // Pour changer l'attribut d'une balise HTML
  private url: string;
  // Booléen utilisé pour changer le style (classes CSS, style inline)
  private isEditable: boolean;
  // Objet utilisé pour regrouper les classes CSS (en lien avec ngClass)
  private classesBtn: object;
  // Objet utilisé pour regrouper les propriétés CSS inline d'un paragraphe
  private objStyle: object;
  // Météo : pour tester le ngSwitch
  private meteo: string;

  /**
   * Appelé à la construction du component
   * Initialise les propriétés
   */
  constructor() {
    this.content = `But <strong>I must explain</strong> to you how all this mistaken
    idea of denouncing pleasure and praising pain was born and I will
    give you a complete account of the system, and expound the actual
    teachings of the great explorer !`;
    this.url = 'https://www.ecosia.org/';
    this.isEditable = true;

    // Initialisation :
    // - des classes CSS "blue-grey" et "brown" du bouton (pour ngClass)
    // - du style inline
    this.updateClassesAndStyles();

    // On initialise la météo
    this.meteo = 'ensoleillé';
  }

  /**
   * Méthode appelé lors du clic sur le bouton "Changer de style"
   * - Change le booléen "isEditable"
   * - Met à jour l'objet des classes CSS (classesBtn) pour mettre à jour la couleur
   */
  public changeStyle() {
    // Changement du booléen
    if (this.isEditable === true) {
      this.isEditable = false;
    } else {
      this.isEditable = true;
    }

    // Mise à jour des classes CSS du bouton
    this.updateClassesAndStyles();
  }

  /**
   * Initialisation/Met à jour les classes CSS gérant la couleur du bouton
   */
  private updateClassesAndStyles() {
    this.classesBtn = {
      'blue-grey' : this.isEditable,
      'brown'     : !this.isEditable
    };
    this.objStyle = {
      'color'       : this.isEditable ? 'chocolate' : 'royalblue',
      'border-left' : !this.isEditable ? '4px solid royalblue' : 'none'
    };
  }
}
