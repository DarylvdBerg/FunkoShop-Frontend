import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Image} from '../products/image.model';
import {environment} from '../../environments/environment';
import {Product} from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getRequest(url: string) {
    return this.http.get<any>(this.baseUrl + url);
  }

  getImageUrl(image: Image) {
    // return '${{this.baseUrl}/images/${image.id}';
    return this.baseUrl + 'images/' + image.id;
  }
}
