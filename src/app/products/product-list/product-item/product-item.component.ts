import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProductImages(product: Product) {
    return this.productService.getProductImages(product);
  }

}
