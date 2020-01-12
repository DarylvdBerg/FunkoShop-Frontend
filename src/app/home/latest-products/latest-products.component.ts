import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../products/product.model';
import {ProductService} from '../../products/product.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProductImage(product: Product) {
    return this.productService.getProductImages(product);
  }
}
