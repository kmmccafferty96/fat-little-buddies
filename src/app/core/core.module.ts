import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class CoreModule {
  constructor(private iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faFacebook, faInstagram, faTwitter);
  }
}
