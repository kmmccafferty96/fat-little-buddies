import { Component } from '@angular/core';

export const FAT_LITTLE_BUDDIES_TITLE = 'Fat Little Buddies Tavern - Olmsted Falls, OH';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo = '../../assets/FLB_Logo.svg';
  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'menu', label: 'Menu' },
    { link: 'location', label: 'Location' },
    { link: 'events', label: 'Events' },
    { link: 'contact', label: 'Contact' }
  ];
}
