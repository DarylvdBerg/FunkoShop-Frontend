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
  productSubscription: Subscription;
  searchTerm: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productSubscription = this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  filterProducts(searchTerm: string) {
    return this.products.filter(product => {
      const text = product.name.toLowerCase();
      return text.indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

}
