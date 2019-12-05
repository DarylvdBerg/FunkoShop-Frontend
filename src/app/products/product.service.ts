import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) {}

  getProducts() {
    return this.api.getRequest('product/all/');
  }

  getProduct(id: number) {
    return this.api.getRequest('product/' + id + '/');
  }

}
