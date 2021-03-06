import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LatestProductsComponent} from './home/latest-products/latest-products.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {CartModule} from './cart/cart.module';
import {AuthInterceptor} from './shared/auth.interceptor';
import {ResponseInterceptor} from './shared/response.interceptor';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LatestProductsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ProductsModule,
    AdminModule,
    CartModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    UserModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
