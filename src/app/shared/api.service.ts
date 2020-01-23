import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Image} from '../products/image.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  postRequest(url: string, data: HttpParams) {
      return this.http.post<any>(this.baseUrl + url, data);
  }

  postJson(url: string, data: any) {
    return this.http.post<any>(this.baseUrl + url, data);
  }

  putRequest(url: string, data: HttpParams) {
      return this.http.put<any>(this.baseUrl + url, data);
  }

  postMultipartRequest(url: string, data: FormData) {
      return this.http.post<any>(this.baseUrl + url, data);
  }

  getRequest(url: string) {
      return this.http.get<any>(this.baseUrl + url);
  }

  deleteRequest(url: string) {
    return this.http.delete<any>(this.baseUrl + url);
  }

  getImageUrl(image: Image) {
    return this.baseUrl + 'images/' + image.id;
  }
}
