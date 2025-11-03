import { Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { EditableFieldComponent } from '@app/shared/editable-field/editable-field.component';
import { Card } from '@app/shared/models/Card';
import { MediaType } from '@app/shared/enums/media-type';
import { FormsModule } from '@angular/forms';
import { EditableSelectComponent } from '@app/shared/editable-select/editable-select.component';
import { StarRatingComponent } from '@app/shared/star-rating/star-rating.component';
import { TagListComponent } from '@app/shared/tag-list/tag-list.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entity-card',
  imports: [
    EditableFieldComponent,
    FormsModule,
    EditableSelectComponent,
    StarRatingComponent,
    TagListComponent,
    DatePipe
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
  protected currentCard: WritableSignal<Card> = signal(this.card());

  public isEditable: InputSignal<boolean> = input(true);

  protected updateField(fieldName: string, newValue: string | number | string[]): void {
    this.currentCard.set({ ...this.currentCard(), [fieldName]: newValue });

    // Optionally: Save immediately to backend
    // this.cardService.updateCardField(this.card.id, fieldName, newValue).subscribe();
  }

  protected onMediaTypeChange(mediaType: string) {
    this.currentCard.set({ ...this.currentCard(), mediaType: mediaType as MediaType });
  }
}
