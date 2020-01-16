import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpParams} from '@angular/common/http';
import {User} from '../user/user.model';
import {Cart} from '../cart/cart.model';

@Injectable ({
  providedIn: 'root'
})

export class OrderService {

  constructor(private apiService: ApiService) {}

  createOrder(cart: Cart[]) {
    return this.apiService.postJson('order/create', cart);
  }

  getAllOrders() {
    return this.apiService.getRequest('order/all', true)
  }
}
