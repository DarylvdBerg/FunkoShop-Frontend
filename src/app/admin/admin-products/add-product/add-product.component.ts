import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../../../products/product.model';
import {ProductService} from '../../../products/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  product: Product = new Product();
  files: FileList;

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit() {
    M.CharacterCounter.init(document.querySelectorAll('textarea#description'));
  }

  onSubmit() {
    if (this.form.valid) {
      let productId = -1;
      this.productService.saveProduct(this.product)
        .subscribe((response) => {
          console.log(response);
          productId = response.content;
          if (productId !== -1 && this.files != null && this.files.length >= 1) {
            this.productService.saveProductImages(this.files, productId)
              .subscribe(() => {
                  const toast = M.toast({html: response.message});
                  setTimeout(() => {
                    toast.dismiss();
                    this.route.navigate(['/admin/paneel']);
                  }, 1000);
              }, error => {
                console.log(error);
                M.toast({html: error.error.message});
              });
          } else {
            const toast = M.toast({html: response.message});
            setTimeout(() => {
              toast.dismiss();
              this.route.navigate(['/admin/paneel/']);
            }, 1000);
          }
        }, error => {
          console.log(error);
          M.toast({html: error.error.message});
        });
    }
  }

  filesSelected(files: FileList) {
    this.files = files;
    console.log(files);
  }
}
