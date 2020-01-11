import { Component, OnInit } from '@angular/core';
import {ProductService} from '../products/product.service';
import {Product} from '../products/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    M.Parallax.init(document.querySelectorAll('.parallax'));
    this.productService.getProducts()
      .subscribe(products => {
        console.log(products.content);
        this.products = products.content;
      });
  }

}
