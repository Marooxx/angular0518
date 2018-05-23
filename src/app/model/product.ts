// Création de la classe du Produit
export class Product {
    name: string;
    description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

// Création d'un produit de test
export const PRODUCT_TEST: Product = new Product('Hamac', 'Pour se reposer après une semaine d\'Angular');

// Création d'un tableau de produits de test
// Les deux notations suivantes sont équivalentes :
// - Product[]
// - Array<Product>
export const TAB_PRODUCTS: Product[] = [
    new Product('Hamac', 'Pour se reposer après une semaine d\'Angular'),
    new Product('Voiture', 'Véhicule à 4 roues avec un moteur et un volant'),
    new Product('Tongue', 'Chaussure d\'été'),
    new Product('Vélo', 'Moyen de transport à 2 roues (ou 4)'),
    new Product('Moto', 'Véhicule à 2 roues (ou 3)'),
    new Product('Avion', 'Moyen de transport volant (passager ou fret)'),
];
