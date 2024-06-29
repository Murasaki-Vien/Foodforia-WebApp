import { Component } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      'notifications',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/notifications.svg')
    ),
    this.matIconRegistry.addSvgIcon(
      'bi_bag',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/bi_bag.svg')
    ),this.matIconRegistry.addSvgIcon(
      'hamburger',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/hamburger.svg')
    )
  }

}
