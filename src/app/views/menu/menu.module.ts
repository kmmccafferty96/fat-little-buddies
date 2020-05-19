import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuView } from './menu.view';

@NgModule({
  declarations: [MenuView],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: MenuView }])]
})
export class MenuModule {}
