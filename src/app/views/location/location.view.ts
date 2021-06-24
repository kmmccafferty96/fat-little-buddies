import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FAT_LITTLE_BUDDIES_TITLE } from '../../app.component';

@Component({
  selector: 'flb-location',
  templateUrl: './location.view.html',
  styleUrls: ['./location.view.scss']
})
export class LocationView {
  constructor(private _titleService: Title) {
    this._titleService.setTitle(`Location - ${FAT_LITTLE_BUDDIES_TITLE}`);
  }
}
