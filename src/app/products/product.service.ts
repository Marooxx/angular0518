import { Injectable } from '@angular/core';
import { TAB_PRODUCTS, Product } from '../model/product';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'api/products';

  constructor(private http: HttpClient) {

  }

  /**
   * Retourne la liste des produits depuis un tableau en mémoire
   */
  public getProducts(): Observable<Product[]> {
    console.log('Utilisation de ProductService::getProducts');

    return this.http.get<Product[]>(this.URL).pipe(
      tap((products) => console.log(`L'API a répondu : liste des produits`)),
      catchError(this.handleError('getProducts', []))
    );
  }

  /**
   * Méthode de gestion des erreurs
   * @param operation
   * @param result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    console.error(`${operation} echoué: ${error.message}`);
    return of(result as T);
    };
  }
}
