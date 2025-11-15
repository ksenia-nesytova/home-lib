import { Component, effect, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { EditableFieldComponent } from '@app/shared/components/editable-field/editable-field.component';
import { Card } from '@app/shared/models/Card';
import { MediaType } from '@app/shared/enums/media-type';
import { FormsModule } from '@angular/forms';
import { EditableSelectComponent } from '@app/shared/components/editable-select/editable-select.component';
import { StarRatingComponent } from '@app/shared/components/star-rating/star-rating.component';
import { TagListComponent } from '@app/shared/components/tag-list/tag-list.component';
import { DatePipe } from '@angular/common';
import { UploaderComponent } from "@app/shared/components/uploader/uploader.component";

const DEFAULT_IMAGE = 'assets/USS_Enterprise.png';

@Component({
  selector: 'app-entity-card',
  imports: [
    EditableFieldComponent,
    FormsModule,
    EditableSelectComponent,
    StarRatingComponent,
    TagListComponent,
    DatePipe,
    UploaderComponent
  ],
  templateUrl: './entity-card.component.html',
  styleUrl: './entity-card.component.scss'
})
export class EntityCardComponent {
  protected readonly MEDIA_OPTIONS = Object.values(MediaType);

  public isEditable: InputSignal<boolean> = input(true);
  public card: InputSignal<Card | null> = input<Card | null>(null);
  protected currentCard: WritableSignal<Card> = signal({
    id: '',
    title: 'Untitled',
    mediaType: MediaType.BOOK,
    tags: []
  });

  protected coverImage: WritableSignal<string> = signal(DEFAULT_IMAGE);

  constructor() {
    effect(() => {
      if (this.card()) {
        this.currentCard.set(this.card()!);
        this.coverImage.set(this.currentCard().coverImage || DEFAULT_IMAGE);
      }
    });
  }

  ngOnInit() {
    this.coverImage.set(this.getCoverImage());
  }


  protected updateField(fieldName: string, newValue: string | number | string[]): void {
    this.currentCard.set({ ...this.currentCard(), [fieldName]: newValue });

    // Optionally: Save immediately to backend
    // this.cardService.updateCardField(this.card.id, fieldName, newValue).subscribe();
  }

  protected onMediaTypeChange(mediaType: string) {
    this.currentCard.set({ ...this.currentCard(), mediaType: mediaType as MediaType });
  }

  protected getCoverImage(): string {
    return this.currentCard().coverImage || DEFAULT_IMAGE;
  }

  protected onImageUpdated(newImage: string) {
    const updatedCard = { ...this.currentCard(), coverImage: newImage };
    this.currentCard.set(updatedCard);
    this.coverImage.set(newImage);
    // ADD: save logic
    //TEMP
    this.currentCard().coverImage = newImage;
  }

  protected onImageError(): void {
    this.coverImage.set(DEFAULT_IMAGE);
  }
}
