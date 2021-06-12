import { Component } from '@angular/core';

import { CarouselItem } from './components/carousel/carousel.component';

@Component({
  selector: 'flb-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView {
  carouselItems: CarouselItem[] = [
    {
      title: 'Great Food',
      description: `Here is the description. It's a good description.`,
      buttonText: 'View Menu',
      buttonUrl: 'menu',
      imgSrc: 'assets/wings.jpg'
    },
    {
      title: 'Buffetfest',
      description: `Here is the description. It's a good description.`,
      buttonText: 'Buy Tickets',
      buttonUrl: 'events',
      imgSrc: 'assets/parrot.jpg'
    },
    {
      title: 'Buffetfest',
      description: `Here is the description. It's a good description.`,
      buttonText: 'Buy Tickets',
      buttonUrl: 'events',
      imgSrc: 'assets/parrot2.jpg'
    },
    {
      title: 'Buffetfest',
      description: `Here is the description. It's a good description.`,
      buttonText: 'Buy Tickets',
      buttonUrl: 'events',
      imgSrc: 'assets/parrot3.jpg'
    }
  ];
}
