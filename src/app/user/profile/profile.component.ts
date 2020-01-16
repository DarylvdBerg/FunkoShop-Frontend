import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll('.tabs'));
  }

  ngAfterViewInit(): void {
    M.Tabs.init(document.querySelectorAll('.tabs'));
  }

}
