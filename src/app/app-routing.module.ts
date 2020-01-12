import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {LoginComponent} from './user/login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {RegisterComponent} from './user/register/register.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'producten', component: ProductListComponent},
  {path: 'producten/:productId', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
