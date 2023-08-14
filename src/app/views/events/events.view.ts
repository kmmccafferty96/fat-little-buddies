import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FAT_LITTLE_BUDDIES_TITLE } from '../../app.component';

export interface Event {
  title: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  button2Text?: string;
  button2Url?: string;
  imgSrc?: string;
  disabled?: boolean;
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
    //   title: `Fat Little 5K and 1 Mile Walk`,
    //   description: `Join us for the 13th Annual Fat Little 5K and 1 Mile Walk to benefit the Alzheimer's Association.
    //   There will be awards, music, lunch specials, and a huge Fat Little Party after the event.
    //   Come for the race, stay for the party!`,
    //   buttonText: `Sign Up`,
    //   buttonUrl: `https://www.runsignup.com/FatLittle5K`,
    //   imgSrc: `assets/events/5k.png`,
    //   date: new Date('Sat Jun 17 2023 9:00:00 GMT-0400')
    // },
    // {
    //   title: `4th of July FLB Cornhole Tournament`,
    //   description: `Join us for the 4th of July Fat Little Buddies Cornhole Tournament! There will be music, drinks, and food!
    //   To join, first sign up below using the Sign Up link and then pay using the Pay link.`,
    //   buttonText: `Sign Up`,
    //   buttonUrl: `https://docs.google.com/forms/d/1jk-8khQIZ0CAjQXSvniqOl981d_uXip4Kz0ZOucjPVI/viewform?edit_requested=true`,
    //   button2Text: `Pay`,
    //   button2Url: `https://www.eventbrite.com/e/4th-of-july-flb-cornhole-tournament-tickets-653356174907`,
    //   imgSrc: `assets/events/cornhole.jpg`,
    //   date: new Date('Fri Jun 30 2023 19:00:00 GMT-0400')
    // },
    // {
    //   title: `13th Anniversary Party - Whiskey Bound`,
    //   description: `Woohoo!!! We have a fun weekend coming up and we want you to join the party!!!
    //   Celebrations begin Friday, August 11th with Whiskey Bound - Ohio's Premier High Energy Country and Southern Rock Party Band! No Cover!`,
    //   imgSrc: `assets/events/whiskeybound.jpg`,
    //   date: new Date('Fri Aug 11 2023 19:30:00 GMT-0400')
    // },
    // {
    //   title: `Fat Little Buffett Fest`,
    //   description: `Join us for the 6th Annual Outdoor Music Festival featuring two Jimmy Buffett tribute bands!
    //     Doors open at 2PM, live music starts at 3PM!!
    //     Food by Kolar Concessions!
    //     Proceeds Benefit Alzheimer's Association!`,
    //   buttonText: `Buy Tickets`,
    //   buttonUrl: `https://www.eventbrite.com/e/6th-annual-fat-little-buffett-music-festival-tickets-643782218947?aff=FLBSite`,
    //   imgSrc: `assets/events/FLB_Fest.png`,
    //   date: new Date('Sat Aug 12 2023 14:00:00 GMT-0400')
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
