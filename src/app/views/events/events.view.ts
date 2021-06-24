import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FAT_LITTLE_BUDDIES_TITLE } from '../../app.component';

export interface Event {
  title: string;
  description?: string;
  buttonText: string;
  buttonUrl: string;
  imgSrc?: string;
  date: Date;
}

@Component({
  selector: 'flb-events',
  templateUrl: './events.view.html',
  styleUrls: ['./events.view.scss']
})
export class EventsView {
  events: Event[] = [
    {
      title: `11th Annual Fat Little 5K and 1 Mile Walk`,
      description: `Join us for our 11th Annual Fat Little 5K and 1 Mile Walk. ALL proceeds benefit the Alzheimer's Association.
      Come for the race, stay for the party afterwards which includes live music, food and drink specials and lots of friends and family.`,
      buttonText: `Sign Up`,
      buttonUrl: `https://www.runsignup.com/FatLittle5K`,
      imgSrc: `assets/events/5k.png`,
      date: new Date('Sat Jul 31 2021 9:00:00 GMT-0400')
    },
    {
      title: `Fat Little Buffett Fest`,
      description:
        `We can't wait to celebrate our third and fourth annual outdoor music festival with you. ` +
        `One free beer and koozie at entry with each ticket purchase. Shot skis will be back for purchase as well.`,
      buttonText: `Buy Tickets`,
      buttonUrl: `https://www.eventbrite.com/e/3rd-4th-annual-fat-little-buffett-fest-tickets-161028286941`,
      imgSrc: `assets/events/FLB_Fest.png`,
      date: new Date('Sat Aug 7 2021 14:00:00 GMT-0400')
    }
  ];

  constructor(private _titleService: Title) {
    this._titleService.setTitle(`Events - ${FAT_LITTLE_BUDDIES_TITLE}`);
  }
}
