// Création de la classe du Produit
export class Product {
    public id: number;
    public  name: string;
    public description: string;
    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
/*
export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string) { }
}
*/
// Création d'un produit de test
export const PRODUCT_TEST: Product = new Product(1, 'Hamac', 'Pour se reposer après une semaine d\'Angular');

// Création d'un tableau de produits de test
// Les deux notations suivantes sont équivalentes :
// - Product[]
// - Array<Product>
export const TAB_PRODUCTS: Product[] = [
    new Product(2, 'Hamac', 'Pour se reposer après une semaine d\'Angular'),
    new Product(3, 'Voiture', 'Véhicule à 4 roues avec un moteur et un volant'),
    new Product(4, 'Tongue', 'Chaussure d\'été'),
    new Product(5, 'Vélo', 'Moyen de transport à 2 roues (ou 4)'),
    new Product(6, 'Moto', 'Véhicule à 2 roues (ou 3)'),
    new Product(7, 'Avion', 'Moyen de transport volant (passager ou fret)'),
];
