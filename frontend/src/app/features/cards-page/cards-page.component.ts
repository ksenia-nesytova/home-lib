import { Component, inject, OnInit, signal } from '@angular/core';
import { CardsWrapperComponent } from '@app/shared/components/cards-wrapper/cards-wrapper.component';
import { MediaType } from '@app/shared/enums/media-type';
import { Card } from '@app/shared/models/Card';
import { CardsFiltersComponent } from './cards-filters/cards-filters.component';
import { CardFilters } from '@app/shared/models/CardsFilter';
import { MediaEntityService } from '@app/core/services/media-entity.service';
import { RelationshipType } from '@app/shared/enums/relationship-type';
import { AddEntityBtnComponent } from '@app/features/add-entity/add-entity-btn/add-entity-btn.component';
import { AddEntityModalComponent } from '../add-entity/add-entity-modal/add-entity-modal.component';

@Component({
  selector: 'app-cards-page',
  imports: [
    CardsWrapperComponent,
    CardsFiltersComponent,
    AddEntityBtnComponent,
    AddEntityModalComponent,
  ],
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.scss',
})
export class CardsPageComponent implements OnInit {
  protected readonly MEDIA_TYPES = MediaType;

  private entityService = inject(MediaEntityService);

  protected cards = signal<Card[]>([]);

  protected isModalOpen = signal(false);

  ngOnInit() {
    this.populateMockCardsArray();
    this.getAllEntities();
  }

  private populateMockCardsArray() {
    this.cards.set([
      // --- NOIR COLLECTION ---
      {
        id: '1',
        coverImage: 'assets/marlowe1.jpg',
        title: 'The Big Sleep',
        author: 'Raymond Chandler',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1939',
        language: 'English',
        originalLanguage: 'English',
        tags: ['detective', 'noir', 'USA', 'Philip Marlowe', 'urban decay'],
        description:
          'The classic hardboiled detective novel featuring Philip Marlowe.',
        notes: '',
        location: 'shelf N1',
        rating: 5,
        dateAdded: new Date('2024-01-15'),
        isPhysicalCopy: true,
      },
      {
        id: '2',
        coverImage: 'assets/tremblay1.jpg',
        title: 'The Little Sleep',
        author: 'Paul Tremblay',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '2014',
        language: 'English',
        originalLanguage: 'English',
        tags: ['detective', 'homage', 'USA', 'Philip Marlowe', 'modern noir'],
        description:
          'A modern homage to Chandler’s Marlowe style with a twist.',
        notes: 'Unreliable narrator keeps you guessing.',
        location: 'shelf N2',
        rating: 4,
        dateAdded: new Date('2024-02-01'),
        isPhysicalCopy: true,
        relationships: [
          {
            type: RelationshipType.INSPIRED_BY,
            target: ['1'],
          },
        ],
      },

      // --- LABYRINTHINE COLLECTION ---
      {
        id: '9',
        coverImage: 'assets/house_of_leaves.jpg',
        title: 'House of Leaves',
        author: 'Mark Z. Danielewski',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '2000',
        language: 'English',
        originalLanguage: 'English',
        tags: ['metafiction', 'labyrinth', 'architecture', 'madness', 'USA'],
        description: '',
        notes: '',
        location: 'shelf L1',
        rating: 5,
        dateAdded: new Date('2024-04-01'),
        isPhysicalCopy: true,
      },
      {
        id: '10',
        coverImage: 'assets/labyrinths.jpg',
        title: 'Labyrinths',
        author: 'Jorge Luis Borges',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1962',
        language: 'Russian',
        originalLanguage: 'Spanish',
        tags: [
          'metafiction',
          'labyrinth',
          'philosophy',
          'short stories',
          'Argentina',
        ],
        description:
          'Collection of stories exploring infinite, recursive, and conceptual mazes.',
        notes: '',
        location: 'shelf L2',
        rating: 5,
        dateAdded: new Date('2024-04-05'),
        isPhysicalCopy: true,
      },
      {
        id: '13',
        coverImage: 'assets/name_of_the_rose.jpg',
        title: 'The Name of the Rose',
        author: 'Umberto Eco',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1980',
        language: 'English',
        originalLanguage: 'Italian',
        tags: ['labyrinth', 'library', 'mystery', 'scholarly', 'historical'],
        description:
          'A medieval murder mystery set in an abbey full of hidden knowledge.',
        notes: '',
        location: 'shelf L5',
        rating: 5,
        dateAdded: new Date('2024-04-20'),
        isPhysicalCopy: true,
        relationships: [
          {
            type: RelationshipType.INSPIRED_BY,
            target: ['10'],
          },
        ],
      },
    ]);
  }

  private getAllEntities() {
    this.entityService.getAllEntities().subscribe((res) => this.cards.set(res));
  }

  protected applyFilters(filters: CardFilters) {
    console.log(filters, 111);
    const current = this.cards();
  }

  protected openAddCardModal() {
    this.isModalOpen.set(true);
  }
}
