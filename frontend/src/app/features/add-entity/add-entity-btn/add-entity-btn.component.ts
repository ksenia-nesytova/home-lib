import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-add-entity-btn',
  imports: [],
  templateUrl: './add-entity-btn.component.html',
  styleUrl: './add-entity-btn.component.scss',
})
export class AddEntityBtnComponent {
  protected open = output<void>();

  protected onClick() {
    this.open.emit();
  }
}
