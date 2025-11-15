import { Component, input, InputSignal, output } from '@angular/core';
import { TagComponent } from '@app/shared/components/tag/tag.component';
import { EditableFieldComponent } from '@app/shared/components/editable-field/editable-field.component';

@Component({
  selector: 'app-tag-list',
  imports: [
    TagComponent,
    EditableFieldComponent
  ],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent {
  // for future autiocomplete, etc
  public availableTags: InputSignal<string[]> = input<string[]>([]);
  public tags: InputSignal<string[]> = input<string[]>([]);

  public isEditable: InputSignal<boolean> = input(true);
  public tagsChange = output<string[]>();

  protected showAddInput: boolean = false;

  protected removeTag(tag: string): void {
    const updated = this.tags().filter(t => t !== tag);
    this.tagsChange.emit(updated);
  }

  protected addTag(newTag: string): void {
    const trimmed = newTag.trim();
    if (!trimmed || this.tags().includes(trimmed)) {
      return;
    }

    const updated = [...this.tags(), trimmed];
    this.tagsChange.emit(updated);
    this.showAddInput = false;
  }

}
