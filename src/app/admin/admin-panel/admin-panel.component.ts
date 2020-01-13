import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../products/product.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll('.tabs'));
  }

}
