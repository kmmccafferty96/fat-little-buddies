import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./views/menu/menu.module').then((m) => m.MenuModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./views/location/location.module').then((m) => m.LocationModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./views/events/events.module').then((m) => m.EventsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./views/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
