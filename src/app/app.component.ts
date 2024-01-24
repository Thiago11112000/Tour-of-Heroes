import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tour-of-heroes';
  menuItems: MenuItem [] =[
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'dashboard'
    },
    {
      icon: 'sports_martial_arts',
      routerLink: '/heroes',
      toolTipText: 'heroes'
    }
  ]
}
