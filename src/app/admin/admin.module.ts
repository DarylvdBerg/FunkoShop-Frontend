import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {FormsModule} from '@angular/forms';
import {AddEditProductComponent} from './admin-products/add-edit-product/add-product.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';



@NgModule({
  declarations: [AdminComponent, AdminProductsComponent, AddEditProductComponent, AdminPanelComponent, AdminOrdersComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class AdminModule { }
