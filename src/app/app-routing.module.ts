import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductComponent} from './products/product/product.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'producten', component: ProductListComponent},
  {path: 'producten/:productId', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
