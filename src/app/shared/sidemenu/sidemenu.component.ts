import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles:[`
    li {
      cursor: pointer;
    }
  `]
})
export class SidemenuComponent{
  public customerMenu: MenuItem[] = [
    {text: 'List', path: './customers/list'},
    {text: 'Create', path: './customers/create'},
  ]
}
