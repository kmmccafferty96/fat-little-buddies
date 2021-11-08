import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FAT_LITTLE_BUDDIES_TITLE } from '../../app.component';

export interface Event {
  title: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
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
    // {
    //   title: `10th Anniversary Party - Faith & Whiskey`,
    //   description: `Woohoo!!! We have a fun weekend coming up and we want you to join the party!!!
    //   It's finally time to celebrate our 10th-ANNIVERSARY PARTY
    //   [after 11 and a half years- thanks COVID!]
    //   Celebrations begin Friday, August 6th with our headliner Faith & Whiskey ~if you don't have one, you better have the other~`,
    //   imgSrc: `assets/events/faith&whiskey.png`,
    //   date: new Date('Fri Aug 6 2021 18:00:00 GMT-0400')
    // },
    // {
    //   title: `Fat Little Buffett Fest`,
    //   description:
    //     `We can't wait to celebrate our third and fourth annual outdoor music festival with you. ` +
    //     `One free beer and koozie at entry with each ticket purchase. Shot skis will be back for purchase as well.`,
    //   buttonText: `Buy Tickets`,
    //   buttonUrl: `https://www.eventbrite.com/e/3rd-4th-annual-fat-little-buffett-fest-tickets-161028286941`,
    //   imgSrc: `assets/events/FLB_Fest.png`,
    //   date: new Date('Sat Aug 7 2021 14:00:00 GMT-0400')
    // },
    // {
    //   title: `11th Annual Fat Little 5K and 1 Mile Walk`,
    //   description: `Join us for the 11th Annual Fat Little 5K and 1 Mile Walk to benefit Olmsted Township Police & Fire Departments.
    //   There will be awards, music, lunch specials, and a huge Fat Little Party after the event.
    //   Come for the race, stay for the party!`,
    //   buttonText: `Sign Up`,
    //   buttonUrl: `https://www.runsignup.com/FatLittle5K`,
    //   imgSrc: `assets/events/5k.png`,
    //   date: new Date('Sat Sept 11 2021 9:00:00 GMT-0400')
    // },
    {
      title: `0.5k Santa Stroll 2021`,
      description: `Join us for the 2021 0.5k Santa Stroll the day after Thanksgiving! Selfies with Santa
      (bring the kids), live music, cash raffle, and basket raffle!`,
      buttonText: `Info & Registration`,
      buttonUrl: `https://fightingforalyssa.regfox.com/ffasantastroll`,
      imgSrc: `assets/events/Santa_Stroll.png`,
      date: new Date('Fri Nov 26 2021 15:30:00 GMT-0400')
    }
  ];

  constructor(private _titleService: Title) {
    this._titleService.setTitle(`Events - ${FAT_LITTLE_BUDDIES_TITLE}`);
  }
}
