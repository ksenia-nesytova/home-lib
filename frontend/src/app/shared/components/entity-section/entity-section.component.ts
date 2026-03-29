import { Component, input } from '@angular/core';

@Component({
  selector: 'app-entity-section',
  imports: [],
  templateUrl: './entity-section.component.html',
  styleUrl: './entity-section.component.scss',
})
export class EntitySectionComponent {
  public title = input.required();
}
