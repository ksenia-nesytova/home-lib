import { Component, input, InputSignal } from '@angular/core';
import { EditableFieldComponent } from '../../shared/editable-field/editable-field.component';
import { Card } from '../../shared/models/Card';
import { MediaType } from '../../shared/enums/media-type';
import { FormsModule } from '@angular/forms';
import { EditableSelectComponent } from '../../shared/editable-select/editable-select.component';

@Component({
  selector: 'app-entity-card',
  imports: [
    EditableFieldComponent,
    FormsModule,
    EditableSelectComponent
  ],
  templateUrl: './entity-card.component.html',
  styleUrl: './entity-card.component.scss'
})
export class EntityCardComponent {

  protected readonly MEDIA_TYPES = MediaType;
  protected readonly MEDIA_OPTIONS = Object.values(MediaType);
  protected mediaOptionSelected = this.MEDIA_TYPES.PLAY;


  protected mockCardData: Card = {
    id: '1',
    coverImage: 'assets/cover.jpg',
    title: 'The Tragedy of Julius Caesar',
    author: 'William Shakespeare',
    mediaType: this.MEDIA_TYPES.PLAY,
    creationDate: '1599',
    language: 'English',
    tags: ['Tragedy', 'Shakespeare', 'Julius Caesar', 'Brutus'],
    description: 'It\'s a play about conspiracy against Julius Caesar.',
    notes: 'My favorite performance was at the Globe. The betrayal themes feel very real to me.',
    location: 'shelf B2',
    rating: 4,
    dateAdded: new Date('2024-05-12'),
    isPhysicalCopy: true
  };

  protected card: InputSignal<Card> = input(this.mockCardData);

  protected updateField(fieldName: string, newValue: string): void {
    // this.card.set({ ...this.card, [fieldName]: newValue });

    // Optionally: Save immediately to backend
    // this.cardService.updateCardField(this.card.id, fieldName, newValue).subscribe();
  }

  protected onMediaTypeChange(mediaType: string) {
    console.log(mediaType);
  }
}
