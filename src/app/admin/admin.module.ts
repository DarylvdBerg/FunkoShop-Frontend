import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductComponent } from './admin-products/add-product/add-product.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [AdminComponent, AdminProductsComponent, AddProductComponent, AdminPanelComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class AdminModule { }
