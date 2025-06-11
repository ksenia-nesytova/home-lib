import { Component, effect, input, InputSignal, output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-select',
  imports: [FormsModule],
  templateUrl: './editable-select.component.html',
  styleUrl: './editable-select.component.scss'
})
export class EditableSelectComponent {

  public value: InputSignal<string> = input('');
  public placeholder: InputSignal<string> = input('Click to edit');
  public options: InputSignal<string[]> = input<string[]>([]);

  protected isEditing: WritableSignal<boolean> = signal(false);
  protected currentValue: WritableSignal<string> = signal('');

  public valueChange = output<string>();

  constructor() {
    effect(() => {
      if (!this.isEditing()) {
        this.currentValue.set(this.value());
      }
    });
  }


  protected toggleEditMode(): void {
    this.isEditing.set(true);
    this.currentValue.set(this.value());
  }

  protected onBlur(): void {
    this.isEditing.set(false);
    if (this.currentValue() !== this.value()) {
      this.valueChange.emit(this.currentValue());
    }
  }

}
