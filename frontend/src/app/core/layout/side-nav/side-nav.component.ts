import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarService } from '@app/core/services/navbar.service';
import { ThemeSwitchComponent } from '@app/core/layout/theme-switch/theme-switch.component';
import { MatIconModule } from '@angular/material/icon';

export interface NavLink {
  label: string;
  path: string;
  icon?: string;
  googleIcon?: string;
}

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, ThemeSwitchComponent, MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  protected readonly navbarService = inject(NavbarService);

  protected readonly navLinks: NavLink[] = [
    { label: 'All Cards', path: '#', icon: 'HL-miscFolder' },
    { label: 'Favorites', path: '#', icon: 'HL-miscFolder' },
  ];

  public collapseMobile(): void {
    if (this.navbarService.isMobileOpen()) {
      this.navbarService.toggleMobile();
    }
  }
}
