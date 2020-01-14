import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {RouterModule} from '@angular/router';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [CartComponent, OrderComponent, CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CartModule { }
