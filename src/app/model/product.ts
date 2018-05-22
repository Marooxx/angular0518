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
export const PRODUCT_TEST = new Product('Hamac', 'Pour se reposer après une semaine d\'Angular');
