import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  exports: [MatSidenavModule, MatToolbarModule, MatButtonModule, MatDividerModule, MatListModule, FontAwesomeModule]
})
export class CoreModule {
  constructor(private iconLibrary: FaIconLibrary) {
    this.iconLibrary.addIcons(faBars, faFacebook, faInstagram, faTwitter);
  }
}
