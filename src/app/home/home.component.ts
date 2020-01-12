import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../products/product.service';
import {Product} from '../products/product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Product[];
  prouctsSubscription: Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    M.Parallax.init(document.querySelectorAll('.parallax'));
    this.prouctsSubscription = this.productService.getProducts()
      .subscribe(products => {
        console.log(products.content);
        this.products = products.content;
      });
  }

  ngOnDestroy(): void {
    this.prouctsSubscription.unsubscribe();
  }
}
