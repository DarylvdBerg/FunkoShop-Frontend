import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {User} from '../user/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') != null ) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }

  logout() {
    localStorage.removeItem('user');
    const toast = M.toast({html: 'Gebruiker is uitgelogd!'});
    setTimeout(() => {
      this.route.navigate(['/']);
    }, 1000);
  }
}
