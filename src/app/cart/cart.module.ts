import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {RouterModule} from '@angular/router';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [CartComponent, OrderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CartModule { }
