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
        .set('no-token', 'no-token')
    };
  }

  postRequest(url: string, data: HttpParams, authToken: boolean) {
    if (authToken) {
      return this.http.post<any>(this.baseUrl + url, data);
    }
    const httpOptions = this.buildHeaderOptions();
    return this.http.post<any>(this.baseUrl + url, data, httpOptions);
  }

  postJson(url: string, data: Object) {
    return this.http.post<any>(this.baseUrl + url, data);
  }

  putRequest(url: string, data: HttpParams, authToken: boolean) {
    if (authToken) {
      return this.http.put<any>(this.baseUrl + url, data);
    }
    const httpOptions = this.buildHeaderOptions();
    return this.http.put<any>(this.baseUrl + url, data, httpOptions);
  }

  postMultipartRequest(url: string, data: FormData, authToken: boolean) {
    if (authToken) {
      return this.http.post<any>(this.baseUrl + url, data);
    }
    const httpOptions = this.buildHeaderOptions();
    return this.http.post<any>(this.baseUrl + url, data, httpOptions);
  }

  getRequest(url: string, authToken: boolean) {
    if (authToken) {
      return this.http.get<any>(this.baseUrl + url);
    }
    const httpOptions = this.buildHeaderOptions();
    return this.http.get<any>(this.baseUrl + url, httpOptions);
  }

  deleteRequest(url: string) {
    return this.http.delete<any>(this.baseUrl + url);
  }

  getImageUrl(image: Image) {
    return this.baseUrl + 'images/' + image.id;
  }
}
