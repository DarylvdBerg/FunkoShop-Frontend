import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule { }
