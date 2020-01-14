import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {HttpParams} from '@angular/common/http';
import {User} from './user.model';
import {zip} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;

  constructor(private api: ApiService) {}

  login(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.api.postRequest('users/login', params, false);
  }

  register(name: string, email: string, password: string) {
    const params = new HttpParams()
      .set('name', name)
      .set('email', email)
      .set('password', password);
    return this.api.postRequest('users/register', params, false);
  }

  registerAddress(userId: number, streetAddress: string, zipCode: string, district: string) {
    const params = new HttpParams()
      .set('user_id', userId.toString())
      .set('street_address', streetAddress)
      .set('zip_code', zipCode)
      .set('district', district);
    return this.api.postRequest('address/create', params, false);
  }
}
