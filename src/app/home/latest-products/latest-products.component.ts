import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../products/product.model';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {
  @Input() product: Product;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.product);
  }

  getProductImage(product: Product) {
    if (product.images.length >= 1) {
      return this.apiService.getImageUrl(product.images[0]);
    }
    return '';
  }
}
