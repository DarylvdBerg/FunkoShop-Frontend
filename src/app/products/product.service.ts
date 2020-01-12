import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Product} from './product.model';
import {Image} from './image.model';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) {}

  getProducts() {
    return this.api.getRequest('product/all/');
  }

  // getProduct(id: number) {
  //   return this.api.getRequest('product/' + id + '/');
  // }

  getProduct(id: number) {
    const productSubject = new Subject<Product>();
    this.api.getRequest('product/' + id + '/')
      .subscribe(response => {
        const product = response.content as Product;
        productSubject.next(product);
        productSubject.complete();
      });
    return productSubject;
  }

  getProductImages(product: Product) {
    if (product.images.length >= 1) {
      return this.api.getImageUrl(product.images[0]);
    }
    return '';
  }

  getProductImage(image: Image) {
    return this.api.getImageUrl(image);
  }

}
