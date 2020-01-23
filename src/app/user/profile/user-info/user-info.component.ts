import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../user.service';
import {UserAddress} from '../../userAddress.model';
import {NgForm} from '@angular/forms';
import Modal = M.Modal;

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @ViewChild('passwordForm', {static: true}) passwordform: NgForm;
  @ViewChild('addressForm', {static: true}) addressForm: NgForm;
  userAddress: UserAddress = new UserAddress();
  constructor(private userService: UserService) { }

  ngOnInit() {
    Modal.init(document.querySelectorAll('.modal'));
    this.userService.getUserAddressInfo()
      .subscribe((userAddress) => {
        this.userAddress = userAddress;
      });
  }

  changePassword() {
    if (this.passwordform.valid) {
      const values = this.passwordform.value;
      if (!this.checkNewPasswords(values.password, values.repeatPassword)) {
        M.toast({html: 'Wachtwoorden komen niet overeen!'});
      } else {
        this.updateUserPassword(values);
      }
    }
  }

  changeUserAddress() {
    if (this.addressForm.valid) {
      this.userService.changeUserAddressInfo(this.userAddress)
        .subscribe((response) => {
          M.toast({html: response.message});
        }, errors => {
          M.toast({html: errors.error.message});
        });
    }
  }

  private updateUserPassword(values) {
    this.userService.changePassword(values.oldPassword, values.password)
      .subscribe((response) => {
        M.toast({html: response.message});
      }, errors => {
        M.toast({html: errors.error.message});
    });
  }

  private checkNewPasswords(password1: string, password2: string) {
    return password1 === password2;
  }
}
