import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product.model';
import {Image} from '../image.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product = new Product();
  productSubscription: Subscription;
  routeSubscription: Subscription;
  @ViewChild('bigImg', {static: true}) bigImg;

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params
      .subscribe(param => {
       this.productSubscription = this.productService.getProduct(param.productId)
         .subscribe((product: Product) => {
           this.product = product;
         });
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
  }

  getProductImages(images: Image) {
    return this.productService.getProductImage(images);
  }

  getProductImage(product: Product) {
    return this.productService.getProductImages(product);
  }

  changeBigImage(index: number) {
    this.bigImg.nativeElement.children[0]
      .setAttribute('src', this.getProductImages(this.product.images[index]));
  }
}
