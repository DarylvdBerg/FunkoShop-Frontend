import { Component, OnInit } from '@angular/core';
import {Product} from '../../products/product.model';
import {CartService} from '../cart.service';
import {ProductService} from '../../products/product.service';
import {Image} from '../../products/image.model';
import {OrderService} from '../../shared/order.service';
import {Cart} from '../cart.model';
import {User} from '../../user/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CartService, private productService: ProductService,
              private orderService: OrderService, private route: Router) { }

  ngOnInit() {
  }

  getProductImage(image: Image) {
    return this.productService.getProductImage(image);
  }

  removeFromCart(index: number) {
    this.cartService.removeProductFromCart(index);
    const name = this.cartService.products[index].name;
    M.toast({html: name + ' verwijderd uit het winkelmandje'});
  }

  checkOutOrder() {
    const products = this.cartService.products;
    const cart: Cart[] = [];

    const user = JSON.parse(localStorage.getItem('user')) as User;
    for (const product of products) {
      cart.push(
        new Cart(product.id, user.id)
      );
    }

    this.orderService.createOrder(cart)
      .subscribe((response) => {
        this.cartService.clearCart();
        const toast = M.toast({html: response.message});
        this.navigateToCheckout(toast);
      }, errors => {
        M.toast({html: errors.error.message});
      });
  }

  private navigateToCheckout(toastMessage) {
    setTimeout(() => {
      toastMessage.dismiss();
      this.route.navigate(['/']);
    }, 1000);
  }
}
