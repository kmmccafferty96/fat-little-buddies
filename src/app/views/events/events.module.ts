import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsView } from './events.view';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [EventsView],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: EventsView }]), CoreModule]
})
export class EventsModule {}
