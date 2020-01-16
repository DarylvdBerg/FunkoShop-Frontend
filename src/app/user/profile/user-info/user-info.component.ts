import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {UserAddress} from '../../userAddress.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userAddress: UserAddress;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserAddressInfo()
      .subscribe((userAddress) => {
        this.userAddress = userAddress;
      });
  }

}
