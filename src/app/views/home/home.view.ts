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
      description: `Our outdoor music festival is coming August 7th!`,
      buttonText: 'Buy Tickets',
      buttonUrl: 'https://www.eventbrite.com/e/3rd-4th-annual-fat-little-buffett-fest-tickets-161028286941',
      isExternalUrl: true,
      imgSrc: 'assets/carousel/parrot3.jpg'
    },
    {
      title: 'Fat Little 5K',
      description: `Join us July 31st for our 11th Annual Fat Little 5K and 1 Mile Walk. ALL proceeds benefit the Alzheimer's Association.`,
      buttonText: 'Sign Up',
      buttonUrl: 'https://www.runsignup.com/FatLittle5K',
      isExternalUrl: true,
      imgSrc: 'assets/carousel/5k.jpg'
    },
    {
      title: 'Great Food',
      description: `Fat Little Buddies has the best food in town!`,
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
