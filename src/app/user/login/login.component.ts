import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form', {static: true}) form: NgForm;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    const currentUser =  localStorage.getItem('user');
    if (currentUser != null) {
      this.userService.currentUser = JSON.parse(currentUser);
      this.route.navigate(['']);
    }
    // if (User.getCurrentUser() != null) {
    //   this.route.navigate(['']);
    // }
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.userService.login(this.form.value.email, this.form.value.password)
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
          M.toast({html: error.error.message});
        });
    } else {
      M.toast({html: 'Formulier is niet correct ingevuld!'});
    }
  }
}
