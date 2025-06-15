import { Component, effect, input, InputSignal, output, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  public maxRating: InputSignal<number> = input(5);
  public inputRating: InputSignal<number> = input(0);
  public isReadOnly = input<boolean>(false);
  public valueChange = output<number>();

  protected currentRating: WritableSignal<number> = signal(0);

  protected stars: number[] = [];
  protected hoveredOver: number = 0;

  constructor() {
    effect(() => {
      if (!this.isReadOnly()) {
        this.currentRating.set(this.inputRating());
        this.stars = Array(this.maxRating()).fill(0);

      }
    });
  }

  protected hover(value: number) {
    if (!this.isReadOnly()) {
      this.hoveredOver = value;
    }
  }

  protected fill(index: number): boolean {
    return index < (this.hoveredOver || this.currentRating());
  }

  protected save(value: number) {
    if (!this.isReadOnly()) {
      this.currentRating.set(value);
      this.valueChange.emit(this.currentRating());
    }
  }
}
