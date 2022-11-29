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
    //   title: `12th Anniversary Party - Whiskey Bound`,
    //   description: `Woohoo!!! We have a fun weekend coming up and we want you to join the party!!!
    //   Celebrations begin Friday, August 5th with Whiskey Bound - Ohio's Premier High Energy Country and Southern Rock Party Band! No Cover!`,
    //   imgSrc: `assets/events/whiskeybound.jpg`,
    //   date: new Date('Fri Aug 5 2022 17:00:00 GMT-0400')
    // },
    // {
    //   title: `Fat Little Buffett Fest`,
    //   description:
    //     `We can't wait to celebrate our fifth annual outdoor music festival with you. ` +
    //     `2 Musical Acts - Dogwood ft. Parrots of the Caribbean. One free beer and koozie at entry with each ticket purchase. ` +
    //     `Proceeds benefit Alzheimer's Association.`,
    //   buttonText: `Buy Tickets`,
    //   buttonUrl: `https://www.eventbrite.com/e/5th-annual-fat-little-buffett-music-festival-tickets-367892405087`,
    //   imgSrc: `assets/events/FLB_Fest.png`,
    //   date: new Date('Sat Aug 6 2022 14:00:00 GMT-0400')
    // },
    // {
    //   title: `12th Annual Fat Little 5K and 1 Mile Walk`,
    //   description: `Join us for the 12th Annual Fat Little 5K and 1 Mile Walk to benefit the Alzheimer's Association.
    //   There will be awards, music, lunch specials, and a huge Fat Little Party after the event.
    //   Come for the race, stay for the party!`,
    //   buttonText: `Sign Up`,
    //   buttonUrl: `https://www.runsignup.com/FatLittle5K`,
    //   imgSrc: `assets/events/5k.png`,
    //   date: new Date('Sat Sept 24 2022 9:00:00 GMT-0400')
    // }
    // {
    //   title: `0.5k Santa Stroll 2022`,
    //   description: `Join us for the 2022 0.5k Santa Stroll the day after Thanksgiving! Selfies with Santa
    //   (bring the kids), live music, cash raffle, and basket raffle all benefiting Fighting for Alyssa!`,
    //   buttonText: `Info & Registration`,
    //   buttonUrl: `https://fightingforalyssa.regfox.com/ffasantastroll`,
    //   imgSrc: `assets/events/Santa_Stroll.png`,
    //   date: new Date('Fri Nov 25 2022 17:00:00 GMT-0400')
    // }
  ];

  constructor(private _titleService: Title) {
    this._titleService.setTitle(`Events - ${FAT_LITTLE_BUDDIES_TITLE}`);
  }
}
