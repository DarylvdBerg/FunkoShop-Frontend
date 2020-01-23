import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    const currentUser = localStorage.getItem('user');
    if (currentUser != null) {
      this.userService.currentUser = JSON.parse(currentUser);
      this.route.navigate(['']);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.register();
    }
  }

  private register() {
    this.userService.register(this.form.value.name, this.form.value.email, this.form.value.password)
      .subscribe((response) => {
        const user = response.content as User;
        localStorage.setItem('user', JSON.stringify(user));
        this.userService.currentUser = user;
        this.registerAddress(user.id, this.form.value.streetAddress,
          this.form.value.zipCode, this.form.value.district, response);
      }, errors => {
        M.toast({html: errors.error.message});
      });
  }

  private registerAddress(userId: number, streetAddress: string, zipCode: string, district: string, response) {
    this.userService.registerAddress(userId, streetAddress, zipCode, district)
      .subscribe(() => {
        const toast = M.toast({html: response.message});
        this.navigateToHome(toast);
      }, errors => {
        M.toast({html: errors.error.message});
      });
  }

  private navigateToHome(toastMessage) {
    setTimeout(() => {
      toastMessage.dismiss();
      this.route.navigate(['/']);
    }, 1000);
  }
}
