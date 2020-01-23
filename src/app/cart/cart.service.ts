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
    if (localStorage.getItem('user') == null) {
      M.toast({html: 'Om producten toe te voegen moet je ingelogd zijn!'});
    } else {
      this.products.push(product);
      localStorage.setItem('cart', JSON.stringify(this.products));
      M.toast({html: `${product.name} toegevoegd aan het winkelmandje`});
    }
  }

  removeProductFromCart(index: number) {
    this.products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  clearCart() {
    this.products = [];
    localStorage.removeItem('cart');
  }
}
