import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }
  removeFromCart(product: Product) {
    this.cart.set(this.cart().filter((item) => item.id !== product.id));
  }
  constructor() {}
}
