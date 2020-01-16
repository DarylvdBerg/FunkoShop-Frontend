import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/order.service';
import {Order} from '../../shared/order.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders()
      .subscribe((orders) => {
        this.orders = orders.content;
      }, errors => {
        console.log(errors);
      });
  }

  convertToDate(orderDate) {
  }

}
