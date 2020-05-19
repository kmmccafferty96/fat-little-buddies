import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsView } from './events.view';

@NgModule({
  declarations: [EventsView],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: EventsView }])]
})
export class EventsModule {}
