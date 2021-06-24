import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as Flickity from 'flickity';

export interface CarouselItem {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  isExternalUrl: boolean;
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
      setGallerySize: false,
      adaptiveHeight: true,
      cellAlign: 'left',
      wrapAround: true,
      autoPlay: 5000,
      pauseAutoPlayOnHover: false,
      draggable: false,
      cellSelector: '.carousel__cell'
    });
  }
}
