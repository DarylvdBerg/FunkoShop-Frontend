import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Image} from '../products/image.model';
import {environment} from '../../environments/environment';
import {Product} from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  private buildHeaderOptions() {
    const head = new HttpHeaders({
      Authorization: this.buildAuthHeader()
    });
    return {
      header: head,
      observe: 'response' as 'body',
    };
  }

  private buildAuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
      return '';
    }
    return `Bearer ${user.authToken}`;
  }

  postRequest(url: string, data: HttpParams, authToken: boolean) {
    if (authToken) {
      return this.http.post<any>(this.baseUrl + url, data, this.buildHeaderOptions());
    }
    return this.http.post<any>(this.baseUrl + url, data);
  }

  getRequest(url: string) {
    return this.http.get<any>(this.baseUrl + url);
  }

  getImageUrl(image: Image) {
    // return '${{this.baseUrl}/images/${image.id}';
    return this.baseUrl + 'images/' + image.id;
  }
}
