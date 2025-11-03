import { Component, inject } from '@angular/core';
import { NavbarService } from '@app/services/navbar.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly navbarService = inject(NavbarService);

}
