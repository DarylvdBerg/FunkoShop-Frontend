import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userService.currentUser);
    M.Tabs.init(document.querySelectorAll('.tabs'));
  }

}
