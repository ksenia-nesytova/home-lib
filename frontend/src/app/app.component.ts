import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { LayoutComponent } from '@app/core/layout/layout.component';
import { iconPaths } from '../assets/icons/icons';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HomeLib';

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);


  constructor() {
    this.registerSVGIcons();
  }


  registerSVGIcons(): void {
    (Object.entries(iconPaths) as [string, string][]).forEach(([iconName, iconPath]) => {
      const iconNameWithPrefix = `HL-${iconName}`;
      this.iconRegistry.addSvgIcon(
        iconNameWithPrefix,
        this.sanitizer.bypassSecurityTrustResourceUrl(iconPath)
      );
    });
  }
}
