import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocationView } from './location.view';

@NgModule({
  declarations: [LocationView],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: LocationView }])]
})
export class LocationModule {}
