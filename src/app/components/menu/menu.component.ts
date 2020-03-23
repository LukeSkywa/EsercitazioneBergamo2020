import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectMenuItem: EventEmitter<number> = new EventEmitter<number>();

  menuList: MenuItem[] = [
    { id: 1, description: 'Home', selected: true},
    { id: 2, description: 'Lista giochi', selected: false},
    { id: 3, description: 'Modifica gioco', selected: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedComponent(id: number){
    for(let menuItem of this.menuList){
      menuItem.selected = id === menuItem.id;
    }    

    this.selectMenuItem.emit(id);
  }

}
