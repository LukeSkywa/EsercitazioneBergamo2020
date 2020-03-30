import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [
    { id: 1, description: 'Home', url: '/portale/home'},
    { id: 2, description: 'Lista giochi', url: '/portale/list'},
    { id: 3, description: 'Modifica gioco', url: '/portale/edit'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
