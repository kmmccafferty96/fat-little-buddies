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
    {
      title: 'Fat Little Buffett Fest',
      description: `Here is the description. It's a good description.`,
      buttonText: 'Buy Tickets',
      buttonUrl: 'https://www.eventbrite.com/e/3rd-4th-annual-fat-little-buffett-fest-tickets-161028286941',
      isExternalUrl: true,
      imgSrc: 'assets/parrot2.jpg'
    },
    {
      title: 'Fat Little 5K',
      description: `Here is the description. It's a good description.`,
      buttonText: 'Sign Up',
      buttonUrl: 'https://www.runsignup.com/FatLittle5K',
      isExternalUrl: true,
      imgSrc: 'assets/parrot.jpg'
    },
    {
      title: 'Great Food',
      description: `Here is the description. It's a good description.`,
      buttonText: 'View Menu',
      buttonUrl: 'menu',
      isExternalUrl: false,
      imgSrc: 'assets/wings.jpg'
    }
  ];

  constructor(private _titleService: Title) {
    this._titleService.setTitle(FAT_LITTLE_BUDDIES_TITLE);
  }
}
