import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id: number;
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.productId;
    });

    this.productService.getProduct(this.id)
      .subscribe(product => {
        this.product = product.content;
        console.log(product.content);
      });
  }

}
