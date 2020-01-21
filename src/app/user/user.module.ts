import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { UserOrdersComponent } from './profile/user-orders/user-orders.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, UserInfoComponent, UserOrdersComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class UserModule { }
