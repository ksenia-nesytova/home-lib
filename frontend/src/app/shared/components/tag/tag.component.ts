import { Component, input, InputSignal, output } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  public value: InputSignal<string> = input('');
  /* can tag be deleted */
  public isRemovable: InputSignal<boolean> = input(true);
  /* does tag function as a link/filter */
  public isClickable: InputSignal<boolean> = input(true);

  public removed = output<string>();
  public clicked = output<string>();


  protected onRemove(e: Event): void {
    e.stopPropagation();
    if (this.isRemovable()) {
      this.removed.emit(this.value());
    }
  }

  protected onClick(): void {
    if (this.isClickable()) {
      this.clicked.emit(this.value());
    }
  }
}
