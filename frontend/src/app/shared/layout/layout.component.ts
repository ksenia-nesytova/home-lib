import { Component } from '@angular/core';
import { HeaderComponent } from '@app/core/layout/header/header.component';
import { FooterComponent } from "@app/core/layout/footer/footer.component";
import { SideNavComponent } from "@app/core/layout/side-nav/side-nav.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, SideNavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
