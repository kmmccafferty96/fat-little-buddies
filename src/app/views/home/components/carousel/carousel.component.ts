import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
const Flickity = require('flickity-bg-lazyload');

export interface CarouselItem {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  imgSrc: string;
}

@Component({
  selector: 'flb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel') private carousel: ElementRef | undefined;

  @Input() items: CarouselItem[] = [];

  constructor(private _router: Router) {}

  ngAfterViewInit(): void {
    this.initializeFlickity();
  }

  navigate(url: string): void {
    this._router.navigateByUrl(url);
  }

  private initializeFlickity(): void {
    new Flickity(this.carousel?.nativeElement, {
      wrapAround: true,
      autoPlay: 5000,
      bgLazyLoad: 1,
      pauseAutoPlayOnHover: true,
      cellSelector: '.carousel__cell',
      imagesLoaded: true
    });
  }
}
