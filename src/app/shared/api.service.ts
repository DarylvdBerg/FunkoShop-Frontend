import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://db.darylvdberg.nl:80/';
  constructor(private http: HttpClient) {}

  getRequest(url: string) {
    return this.http.get<any>(this.baseUrl + url);
  }
}
