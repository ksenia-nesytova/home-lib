import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { LayoutComponent } from './shared/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    EntityCardComponent,
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
