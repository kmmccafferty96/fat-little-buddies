import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactView } from './contact.view';

@NgModule({
  declarations: [ContactView],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ContactView }])]
})
export class ContactModule {}
