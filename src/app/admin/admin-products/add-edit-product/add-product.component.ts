import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../../../products/product.model';
import {ProductService} from '../../../products/product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import Toast = M.Toast;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  product: Product = new Product();
  files: FileList;
  action: string;
  edit: boolean;
  previewFilesList: (string | ArrayBuffer)[] = [];

  constructor(private productService: ProductService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((param) => {
        this.setFormMode(param);

        if (this.edit) {
          this.getProduct(param.id);
        }
      });
    M.CharacterCounter.init(document.querySelectorAll('textarea#description'));
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.edit) {
        this.editProduct();
      } else {
        this.createNewProduct();
      }
    }
  }

  private setFormMode(param: Params) {
    if (param.id != null) {
      this.action = 'aanpassen';
      this.edit = true;
    } else {
      this.action = 'toevoegen';
      this.edit = false;
    }
  }

  private getProduct(productId: number) {
    this.productService.getProduct(productId)
      .subscribe((product) => {
        this.product = product;
      });
  }

  private editProduct() {
    this.productService.editProduct(this.product)
      .subscribe((response) => {
        if (this.files != null && this.files.length >= 1) {
          this.uploadImages(this.files, this.product.id, response);
        } else {
          const toastMessage = M.toast({html: response.message});
          this.toAdminPanelOnSuccess(toastMessage);
        }
      }, error => {
        M.toast({html: error.error.message});
      });
  }

  private createNewProduct() {
    let productId = -1;
    this.productService.saveProduct(this.product)
      .subscribe((response) => {
        productId = response.content;
        if (productId !== -1 && this.files != null && this.files.length >= 1) {
          this.uploadImages(this.files, productId, response);
        } else {
          const toastMessage = M.toast({html: response.message});
          this.toAdminPanelOnSuccess(toastMessage);
        }
      }, error => {
        M.toast({html: error.error.message});
      });
  }

  private uploadImages(files: FileList, productId: number, response) {
    this.productService.saveProductImages(this.files, productId)
      .subscribe(() => {
        const toastMessage = M.toast({html: response.message});
        this.toAdminPanelOnSuccess(toastMessage);
      }, error => {
        M.toast({html: error.error.message});
      });
  }

  private toAdminPanelOnSuccess(toastMessage: Toast) {
    setTimeout(() => {
      toastMessage.dismiss();
      this.route.navigate(['/admin/paneel/']);
    }, 1000);
  }

  filesSelected(files: FileList) {
    this.files = files;
    this.previewFilesList = [];

    Array.from(files).forEach(file => {
      this.previewFile(file);
    });
  }

  previewFile(file: File) {
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewFilesList.push(reader.result);
    };
  }

  removeImageFromList(index: number) {
    Array.from(this.files).splice(index, 1);
    this.previewFilesList.splice(index, 1);
  }
}
