import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeView } from './home.view';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [HomeView, CarouselComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HomeView }]), CoreModule]
})
export class HomeModule {}
