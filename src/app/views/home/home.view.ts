import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FAT_LITTLE_BUDDIES_TITLE } from '../../app.component';
import { CarouselItem } from './components/carousel/carousel.component';

@Component({
  selector: 'flb-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView {
  carouselItems: CarouselItem[] = [
    // {
    //   title: 'Fat Little 5K',
    //   description: `Join us June 17th for our 13th Annual Fat Little 5K and 1 Mile Walk. ALL proceeds benefit the Alzheimer's Association.`,
    //   buttonText: 'Sign Up',
    //   buttonUrl: 'https://www.runsignup.com/FatLittle5K',
    //   isExternalUrl: true,
    //   imgSrc: 'assets/carousel/5k.jpg'
    // },
    // {
    //   title: 'Fat Little Buffett Fest',
    //   description: `Our outdoor music festival is coming August 12th!`,
    //   buttonText: 'Buy Tickets',
    //   buttonUrl:
    //     'https://www.eventbrite.com/e/6th-annual-fat-little-buffett-music-festival-tickets-643782218947?aff=FLBSite',
    //   isExternalUrl: true,
    //   imgSrc: 'assets/carousel/parrot3.jpg'
    // },
    // {
    //   title: 'Santa Stroll 2022',
    //   description: `Join us for the 0.5k Santa Stroll the day after Thanksgiving! Selfies with Santa, live music, cash raffle, and basket raffle all benefiting Fighting for Alyssa!`,
    //   buttonText: 'Info & Registration',
    //   buttonUrl: 'https://fightingforalyssa.regfox.com/ffasantastroll',
    //   isExternalUrl: true,
    //   imgSrc: 'assets/carousel/Santa_Elsa.jpg'
    // },
    {
      prepretitle: 'Voted',
      pretitle: '"Best Wings"',
      title: 'in Northeast Ohio',
      description: `Winner of Cleveland.com's best chicken wings in Northeast Ohio`,
      buttonText: 'View Menu',
      buttonUrl: 'menu',
      isExternalUrl: false,
      imgSrc: 'assets/carousel/wings.jpg'
    }
  ];

  constructor(private _titleService: Title) {
    this._titleService.setTitle(FAT_LITTLE_BUDDIES_TITLE);
  }
}
