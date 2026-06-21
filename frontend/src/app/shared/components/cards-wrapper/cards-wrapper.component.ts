import { Component, input, InputSignal } from '@angular/core';
import { CardViewModel } from '@app/shared/models/CardViewModel';
import { EntityCardComponent } from '../entity-card/entity-card.component';

@Component({
  selector: 'app-cards-wrapper',
  imports: [EntityCardComponent],
  templateUrl: './cards-wrapper.component.html',
  styleUrl: './cards-wrapper.component.scss',
})
export class CardsWrapperComponent {
  public cards = input<CardViewModel[]>([]);
}
