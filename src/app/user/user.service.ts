import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {HttpParams} from '@angular/common/http';
import {User} from './user.model';

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
}
