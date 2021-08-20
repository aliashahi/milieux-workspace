import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'milieux-root',
  templateUrl: './milieux.component.html',
  styleUrls: ['./milieux.component.scss'],
})
export class MilieuxComponent {
  title = 'milieux-workspace';
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'milieux',
      sanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg')
    );
  }
}
