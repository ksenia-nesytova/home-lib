import { Component, effect, input, InputSignal, output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-field',
  imports: [
    FormsModule
  ],
  templateUrl: './editable-field.component.html',
  styleUrl: './editable-field.component.scss'
})
export class EditableFieldComponent {

  public isEditable: InputSignal<boolean> = input(true);

  public value: InputSignal<string> = input('');
  public placeholder: InputSignal<string> = input('Click to edit');
  public type = input<'text' | 'textarea'>('text');

  public valueChange = output<string>();


  protected isEditing: WritableSignal<boolean> = signal(false);
  protected currentValue: WritableSignal<string> = signal('');


  constructor() {
    effect(() => {
      if (!this.isEditing()) {
        this.currentValue.set(this.value());
      }
    });
  }


  protected toggleEditMode(): void {
    if (this.isEditable()) {
      this.isEditing.set(true);
      this.currentValue.set(this.value());
    }
  }

  protected save(): void {
    this.isEditing.set(false);
    if (this.currentValue() !== this.value()) {
      this.valueChange.emit(this.currentValue());
    }
  }

  protected cancel(): void {
    this.isEditing.set(false);
    this.currentValue.set(this.value());
  }
}
