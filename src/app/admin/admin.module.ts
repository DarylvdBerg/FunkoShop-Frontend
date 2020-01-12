import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';



@NgModule({
  declarations: [AdminComponent, AdminProductsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
