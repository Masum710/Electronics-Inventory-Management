import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:8090/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.productsUrl).pipe(
      map(response => {
        console.log("Response from server:", response);
        return response.map(item => new Product(item.id, item.name, item.sku, item.description, item.price,item.stock));
      })
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product);
  }

  updateProduct(product: Product): Observable<any> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
