import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, AfterViewInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    M.Tabs.init(document.querySelectorAll('.tabs'));
  }
}
