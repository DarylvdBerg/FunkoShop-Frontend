import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {User} from '../user/user.model';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('user') != null) {
      this.userService.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    document.addEventListener('DOMContentLoaded', () => {
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
    });
  }

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
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
