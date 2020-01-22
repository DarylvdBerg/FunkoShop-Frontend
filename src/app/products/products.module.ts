import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-list/product-item/product-item.component';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ProductsComponent, ProductDetailComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class ProductsModule { }
