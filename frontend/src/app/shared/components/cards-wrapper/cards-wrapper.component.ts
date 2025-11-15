import { Component, input, InputSignal } from '@angular/core';
import { Card } from '@app/shared/models/Card';
import { EntityCardComponent } from "../entity-card/entity-card.component";

@Component({
  selector: 'app-cards-wrapper',
  imports: [EntityCardComponent],
  templateUrl: './cards-wrapper.component.html',
  styleUrl: './cards-wrapper.component.scss'
})
export class CardsWrapperComponent {
  public cards: InputSignal<Card[]> = input<Card[]>([]);

}
