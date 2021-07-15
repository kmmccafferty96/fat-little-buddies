import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

export const FAT_LITTLE_BUDDIES_TITLE = 'Fat Little Buddies Tavern - Olmsted Township, OH';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenavContent', { read: MatSidenavContent }) sidenavContentScrollable: MatSidenavContent | undefined;

  logo = '../../assets/FLB_Logo.svg';

  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'menu', label: 'Menu' },
    // { link: 'location', label: 'Location' },
    { link: 'events', label: 'Events' },
    { link: 'contact', label: 'Contact' }
  ];

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.sidenavContentScrollable?.scrollTo({ top: 0 });
    });
  }
}
