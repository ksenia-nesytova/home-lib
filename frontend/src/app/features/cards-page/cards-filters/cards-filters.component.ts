import { Component, output, signal, WritableSignal } from '@angular/core';
import { EditableSelectComponent } from "@app/shared/components/editable-select/editable-select.component";
import { MediaType } from '@app/shared/enums/media-type';
import { CardFilters } from '@app/shared/models/CardsFilter';
import { TagSelectorComponent } from "@app/shared/components/tag-selector/tag-selector.component";

@Component({
  selector: 'app-cards-filters',
  imports: [EditableSelectComponent, TagSelectorComponent],
  templateUrl: './cards-filters.component.html',
  styleUrl: './cards-filters.component.scss'
})
export class CardsFiltersComponent {
  protected readonly MEDIA_TYPES = MediaType;

  public mediaOptions = Object.values(MediaType);
  public filtersChange = output<CardFilters>();

  public filters: WritableSignal<CardFilters> = signal({
    search: '',
    mediaType: '',
    author: '',
    title: '',
    language: null,
    rating: null,
    tags: [],
  });


  protected updateFilters<Key extends keyof CardFilters>(field: Key, value: CardFilters[Key]) {
    this.filters.update(prev => ({ ...prev, [field]: value }));
    this.filtersChange.emit(this.filters());
  }

  protected onMediaTypeChange(value: string | null) {
    const mediaType = MediaType[value as keyof typeof MediaType];

    this.filters.update(prev => ({ ...prev, mediaType }));
    this.filtersChange.emit(this.filters());
  }
}
