import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ApiService} from '../../../shared/api.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getProductImages(product: Product) {
    if (product.images.length >= 1) {
      return this.api.getImageUrl(product.images[0]);
    }
    return '';
  }

}
