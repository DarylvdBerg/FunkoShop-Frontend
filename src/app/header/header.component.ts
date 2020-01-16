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
  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {hover: false});
    });

  }

  logout() {
    localStorage.removeItem('user');
    this.userService.currentUser = null;
    const toast = M.toast({html: 'Gebruiker is uitgelogd!'});
    setTimeout(() => {
      toast.dismiss();
      this.route.navigate(['../']);
    }, 1000);
  }

}
