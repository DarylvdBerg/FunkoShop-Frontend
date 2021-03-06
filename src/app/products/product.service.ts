import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Product} from './product.model';
import {Image} from './image.model';
import {Subject} from 'rxjs';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) {}

  getProducts() {
    const productSubject = new Subject<Product[]>();
    this.api.getRequest('product/all')
      .subscribe(response => {
        const product = response.content as Product[];
        productSubject.next(product);
        productSubject.complete();
      });
    return productSubject;
  }

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

  saveProduct(product: Product) {
    const params = new HttpParams()
      .set('name', product.name)
      .set('description', product.description)
      .set('price', product.price.toString());
    return this.api.postRequest('product/add', params);
  }

  editProduct(product: Product) {
    const params = new HttpParams()
      .set('name', product.name)
      .set('description', product.description)
      .set('price', product.price.toString());
    return this.api.putRequest(`product/update/${product.id}`, params);
  }

  saveProductImages(images: FileList, productId: number) {
    const data = new FormData();
    Array.from(images).forEach(image => {
      data.append('images', image);
    });

    return this.api.postMultipartRequest(`images/upload/${productId}`, data);
  }

  deleteProduct(id: number) {
    return this.api.deleteRequest(`product/delete/${id}`);
  }

}
