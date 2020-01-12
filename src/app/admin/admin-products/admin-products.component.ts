import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  shortenProductDescription(description: string) {
    if (description.length > 200) {
      return description.substr(0, 200) + '...';
    }
    return description;
  }

}
