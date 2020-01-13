import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';
import Swal from 'sweetalert2';

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

  deleteProduct(product: Product) {
    Swal.fire({
      title: 'Verwijderen',
      text: `Weet je zeker dat je ${product.name} wilt verwijderen?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ja',
      cancelButtonText: 'Nee'
    }).then((swal) => {
      if (swal.value) {
        this.productService.deleteProduct(product.id)
          .subscribe((response) => {
            M.toast({html: response.message});
            this.deleteRow(product.id);
          });
      } else {
        Swal.close();
      }
    });
  }

  deleteRow(id: number) {
    for (let i = 0; i < this.products.length; ++i) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }
}
