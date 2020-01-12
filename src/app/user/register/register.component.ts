import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from "../user.model";

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
      this.userService.register(this.form.value.name, this.form.value.email, this.form.value.password)
        .subscribe((response) => {
          const user = response.content as User;
          localStorage.setItem('user', JSON.stringify(user));
          this.userService.currentUser = user;
          const toast = M.toast({html: response.message});
          setTimeout(() => {
            toast.dismiss();
            this.route.navigate(['/']);
          }, 1000);
        }, error => {
          M.toast({html: error.error.meaning});
        });
    }
  }
}
