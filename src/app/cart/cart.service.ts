import {Product} from '../products/product.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[];

  constructor() {
    if (localStorage.getItem('cart') != null) {
      this.products = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.products = [];
    }
  }

  addProductToCart(product: Product) {
    this.products.push(product);
    localStorage.setItem('cart', JSON.stringify(this.products));
    M.toast({html: `${product.name} toegevoegd aan het winkelmandje`});
  }

  getProductsFromCart() {
    this.products = JSON.parse(localStorage.getItem('cart'));
    return this.products;
  }

  removeProductFromCart(index: number) {
    this.products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  clearCart() {
    localStorage.removeItem('cart');
  }
}
