import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeView } from './home.view';

@NgModule({
  declarations: [HomeView],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HomeView }])]
})
export class HomeModule {}
