import { Component, effect, ElementRef, HostListener, input, InputSignal, output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-editable-select',
  imports: [
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './editable-select.component.html',
  styleUrl: './editable-select.component.scss'
})
export class EditableSelectComponent {
  public isEditable: InputSignal<boolean> = input(true);

  public value: InputSignal<string> = input('');
  public placeholder: InputSignal<string> = input('Click to edit');
  public options: InputSignal<string[]> = input<string[]>([]);

  protected isEditing: WritableSignal<boolean> = signal(false);
  protected currentValue: WritableSignal<string> = signal('');
  protected dropdownOpen: WritableSignal<boolean> = signal(false);

  public valueChange = output<string>();

  constructor(private elementRef: ElementRef) {
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

  protected onBlur(): void {
    this.isEditing.set(false);
    if (this.currentValue() !== this.value()) {
      this.valueChange.emit(this.currentValue());
    }
  }

  protected toggleDropdown(): void {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  protected select(option: string): void {
    this.currentValue.set(option);
    this.dropdownOpen.set(false);

    if (option !== this.value()) {
      this.valueChange.emit(option);
    }
    this.isEditing.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const host = this.elementRef.nativeElement as HTMLElement;
    const target = event.target as Node;

    if (!host.contains(target)) {
      this.dropdownOpen.set(false);
      this.isEditing.set(false);
    }
  }

}
