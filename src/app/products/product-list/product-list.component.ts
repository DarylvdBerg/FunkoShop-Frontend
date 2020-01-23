import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  productSubscription: Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productSubscription = this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  filterProducts(value) {
    if (!value) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => {
        const text = product.name.toLowerCase();
        return text.indexOf(value.toLowerCase()) > -1;
      });
    }
  }

}
