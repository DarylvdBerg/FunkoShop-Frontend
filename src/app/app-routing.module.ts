import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {RegisterComponent} from './user/register/register.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductsComponent} from './products/products.component';
import {AdminComponent} from './admin/admin.component';
import {AdminGuardService} from './guards/admin-guard.service';
import {AddEditProductComponent} from './admin/admin-products/add-edit-product/add-product.component';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {CartComponent} from './cart/cart.component';
import {OrderComponent} from './cart/order/order.component';
import {AuthenticatedGuard} from './guards/authenticated-guard.service';
import {ProfileComponent} from './user/profile/profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'producten', component: ProductsComponent, children: [
      {path: 'lijst', component: ProductListComponent},
      {path: ':productId', component: ProductDetailComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent, canActivateChild: [AdminGuardService], children: [
      {path: 'paneel', component: AdminPanelComponent},
      {path: 'product/toevoegen', component: AddEditProductComponent},
      {path: 'product/:id/aanpassen', component: AddEditProductComponent}
    ]},
  {path: 'cart', component: CartComponent, canActivateChild: [AuthenticatedGuard], children: [
      {path: 'order', component: OrderComponent},
    ]},
  {path: 'profiel', component: ProfileComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
