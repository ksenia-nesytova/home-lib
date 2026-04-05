import { Component, output, signal } from '@angular/core';
import { EditableFieldComponent } from '@app/shared/components/editable-field/editable-field.component';
import { EditableSelectComponent } from '@app/shared/components/editable-select/editable-select.component';
import { MediaType } from '@app/shared/enums/media-type';
import { Card } from '@app/shared/models/Card';

@Component({
  selector: 'app-entity-core-info-form',
  imports: [EditableFieldComponent, EditableSelectComponent],
  templateUrl: './entity-core-info-form.component.html',
  styleUrl: './entity-core-info-form.component.scss',
})
export class EntityCoreInfoFormComponent {
  protected readonly mediaOptions = Object.values(MediaType);

  public valueChange = output<Partial<Card>>();

  // potentially convert into proper form
  protected title = signal('');
  protected author = signal('');
  protected mediaType = signal<MediaType | null>(null);

  update(field: keyof Card, value: any) {
    if (field === 'title') this.title.set(value);
    if (field === 'author') this.author.set(value);
    if (field === 'mediaType') this.mediaType.set(value);

    this.valueChange.emit({
      title: this.title(),
      author: this.author(),
      mediaType: this.mediaType()!,
    });
  }
}
