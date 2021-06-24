import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FAT_LITTLE_BUDDIES_TITLE } from '../../app.component';

@Component({
  selector: 'flb-contact',
  templateUrl: './contact.view.html',
  styleUrls: ['./contact.view.scss']
})
export class ContactView {
  constructor(private _titleService: Title) {
    this._titleService.setTitle(`Contact - ${FAT_LITTLE_BUDDIES_TITLE}`);
  }
}
