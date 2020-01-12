import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'producten', component: ProductListComponent},
  {path: 'producten/:productId', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
