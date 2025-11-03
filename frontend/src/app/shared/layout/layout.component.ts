import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@app/core/layout/header/header.component';
import { FooterComponent } from "@app/core/layout/footer/footer.component";
import { SideNavComponent } from "@app/core/layout/side-nav/side-nav.component";
import { NavbarService } from '@app/services/navbar.service';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, SideNavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public readonly NavbarService = inject(NavbarService);

}
