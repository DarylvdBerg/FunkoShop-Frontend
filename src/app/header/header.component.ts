import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {User} from '../user/user.model';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {hover: false});
    });

    if (localStorage.getItem('user') != null ) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout() {
    localStorage.removeItem('user');
    const toast = M.toast({html: 'Gebruiker is uitgelogd!'});
    setTimeout(() => {
      toast.dismiss();
      this.route.navigate(['../']);
    }, 1000);
  }

}
