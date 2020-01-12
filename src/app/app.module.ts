import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module';
import {HttpClientModule} from '@angular/common/http';
import {LatestProductsComponent} from './home/latest-products/latest-products.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LatestProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
