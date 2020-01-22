import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../shared/order.service';
import {Order} from '../../../shared/order.model';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit() {
    this.orderService.getUserOrders(this.userService.currentUser.id)
      .subscribe((orders) => {
        this.orders = orders.content;
      });
  }
}
