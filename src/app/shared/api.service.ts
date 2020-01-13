import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Image} from '../products/image.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  private buildHeaderOptions() {
    return  {
      headers: new HttpHeaders()
        .set('Authorization', this.buildAuthHeader())
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
      const httpOptions = this.buildHeaderOptions();
      return this.http.post<any>(this.baseUrl + url, data, httpOptions);
    }
    return this.http.post<any>(this.baseUrl + url, data);
  }

  putRequest(url: string, data: HttpParams, authToken: boolean) {
    if (authToken) {
      const httpOptions = this.buildHeaderOptions();
      return this.http.put<any>(this.baseUrl + url, data, httpOptions);
    }
    return this.http.put<any>(this.baseUrl + url, data);
  }

  postMultipartRequest(url: string, data: FormData, authToken: boolean) {
    if (authToken) {
      const httpOptions = this.buildHeaderOptions();
      return this.http.post<any>(this.baseUrl + url, data, httpOptions);
    }
    return this.http.post<any>(this.baseUrl + url, data);
  }

  getRequest(url: string) {
    return this.http.get<any>(this.baseUrl + url);
  }

  deleteRequest(url: string, authToken: boolean) {
    if (authToken) {
      return this.http.delete<any>(this.baseUrl + url, this.buildHeaderOptions());
    }
    return this.http.delete<any>(this.baseUrl + url, this.buildHeaderOptions());
  }

  getImageUrl(image: Image) {
    // return '${{this.baseUrl}/images/${image.id}';
    return this.baseUrl + 'images/' + image.id;
  }
}
