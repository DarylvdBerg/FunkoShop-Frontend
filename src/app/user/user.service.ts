import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {HttpParams} from '@angular/common/http';
import {User} from './user.model';
import {UserAddress} from './userAddress.model';
import {Subject} from 'rxjs';

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
    return this.api.postRequest('users/login', params);
  }

  register(name: string, email: string, password: string) {
    const params = new HttpParams()
      .set('name', name)
      .set('email', email)
      .set('password', password);
    return this.api.postRequest('users/register', params);
  }

  registerAddress(userId: number, streetAddress: string, zipCode: string, district: string) {
    const params = new HttpParams()
      .set('user_id', userId.toString())
      .set('street_address', streetAddress)
      .set('zip_code', zipCode)
      .set('district', district);
    return this.api.postRequest('address/create', params);
  }

  getUserAddressInfo() {
    const userAddressSubject = new Subject<UserAddress>();
    this.api.getRequest('address/' + this.currentUser.id)
      .subscribe(response => {
        const address = response.content as UserAddress;
        userAddressSubject.next(address);
        userAddressSubject.complete();
      });
    return userAddressSubject;
  }

  changePassword(oldPassword: string, password: string) {
    const params = new HttpParams()
      .set('oldPassword', oldPassword)
      .set('password', password);
    return this.api.putRequest('users/changePassword/' + this.currentUser.id, params);
  }

  changeUserAddressInfo(address: UserAddress) {
    const params = new HttpParams()
      .set('street_address', address.streetAdres)
      .set('zip_code', address.zipCode)
      .set('district', address.district);
    return this.api.putRequest('address/update/' + this.currentUser.id, params);
  }

  setNewAuthToken(authToken: string) {
    this.currentUser.authToken = authToken;
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  isUserPresent() {
    return (this.currentUser != null && localStorage.getItem('user') != null);
  }
}
