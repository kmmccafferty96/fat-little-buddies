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
      title: 'Fat Little Buffett Fest',
      description: `Here is the description. It's a good description.`,
      buttonText: 'Buy Tickets',
      buttonUrl: 'events',
      imgSrc: 'assets/parrot2.jpg'
    },
    {
      title: 'Fat Little 5K',
      description: `Here is the description. It's a good description.`,
      buttonText: 'Sign Up',
      buttonUrl: 'events',
      imgSrc: 'assets/parrot.jpg'
    },
    {
      title: 'Great Food',
      description: `Here is the description. It's a good description.`,
      buttonText: 'View Menu',
      buttonUrl: 'menu',
      imgSrc: 'assets/wings.jpg'
    }
  ];
}
