import { Component, OnInit, signal } from '@angular/core';
import { CardsWrapperComponent } from "@app/shared/components/cards-wrapper/cards-wrapper.component";
import { MediaType } from '@app/shared/enums/media-type';
import { Card } from '@app/shared/models/Card';

@Component({
  selector: 'app-cards-page',
  imports: [CardsWrapperComponent],
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.scss'
})
export class CardsPageComponent implements OnInit {
  protected readonly MEDIA_TYPES = MediaType;

  protected cards = signal<Card[]>([]);

  ngOnInit() {
    this.populateMockCardsArray();
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
        description: 'The classic hardboiled detective novel featuring Philip Marlowe.',
        notes: 'Love Chandler’s rhythm and moral ambiguity.',
        location: 'shelf N1',
        rating: 5,
        dateAdded: new Date('2024-01-15'),
        isPhysicalCopy: true
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
        description: 'A modern homage to Chandler’s Marlowe style with a twist.',
        notes: 'Unreliable narrator keeps you guessing.',
        location: 'shelf N2',
        rating: 4,
        dateAdded: new Date('2024-02-01'),
        isPhysicalCopy: true
      },
      {
        id: '3',
        coverImage: 'assets/ranpo_dwarf.jpg',
        title: 'The Dwarf',
        author: 'Edogawa Ranpo',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1928',
        language: 'Russian',
        originalLanguage: 'Japanese',
        tags: ['detective', 'Japan', 'Kogoro Akechi', 'psychological', 'mystery'],
        description: 'A strange and eerie detective story featuring Kogoro Akechi.',
        notes: 'Ranpo’s macabre style is unforgettable.',
        location: 'shelf N3',
        rating: 5,
        dateAdded: new Date('2024-03-05'),
        isPhysicalCopy: true
      },
      {
        id: '4',
        coverImage: 'assets/ranpo_vampire.jpg',
        title: 'The Vampire',
        author: 'Edogawa Ranpo',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1929',
        language: 'Russian',
        originalLanguage: 'Japanese',
        tags: ['detective', 'Japan', 'Kogoro Akechi', 'horror', 'mystery'],
        description: 'Detective Akechi investigates a chilling case involving a vampire.',
        notes: 'Ranpo’s combination of horror and detective work is brilliant.',
        location: 'shelf N4',
        rating: 4,
        dateAdded: new Date('2024-03-06'),
        isPhysicalCopy: true
      },
      {
        id: '5',
        coverImage: 'assets/ranpo_blacklizard.jpg',
        title: 'The Black Lizard',
        author: 'Edogawa Ranpo',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1934',
        language: 'Russian',
        originalLanguage: 'Japanese',
        tags: ['detective', 'Japan', 'Kogoro Akechi', 'criminal mastermind', 'mystery'],
        description: 'A master thief challenges detective Akechi in a suspenseful story.',
        notes: 'Elegant villainy at its finest.',
        location: 'shelf N5',
        rating: 5,
        dateAdded: new Date('2024-03-07'),
        isPhysicalCopy: true
      },
      {
        id: '6',
        coverImage: 'assets/poe_collected.jpg',
        title: 'Collected Poems & Stories',
        author: 'Edgar Allan Poe',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1845',
        language: 'English',
        originalLanguage: 'English',
        tags: ['detective', 'poetry', 'gothic', 'USA', 'Dupin', 'psychological'],
        description: 'Poe’s foundational works in detective fiction and gothic poetry.',
        notes: 'Dupin is the original template for so many detectives.',
        location: 'shelf N6',
        rating: 5,
        dateAdded: new Date('2024-01-10'),
        isPhysicalCopy: true
      },
      {
        id: '7',
        coverImage: 'assets/lupin1.jpg',
        title: 'Arsène Lupin, Gentleman Burglar',
        author: 'Maurice Leblanc',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1907',
        language: 'French',
        originalLanguage: 'French',
        tags: ['detective', 'France', 'criminal mastermind', 'amateur detective'],
        description: 'The charming thief Arsène Lupin and his adventures.',
        notes: 'Lupin’s wit and elegance are timeless.',
        location: 'shelf N7',
        rating: 4,
        dateAdded: new Date('2024-02-20'),
        isPhysicalCopy: true
      },
      {
        id: '8',
        coverImage: 'assets/in_the_grove.jpg',
        title: 'In the Grove',
        author: 'Akutagawa Ryunosuke',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1922',
        language: 'Russian',
        originalLanguage: 'Japanese',
        tags: ['detective', 'Japan', 'psychological', 'unreliable narrator', 'mystery'],
        description: 'A crime story told through conflicting accounts of witnesses.',
        notes: 'The structure challenges perception of truth.',
        location: 'shelf N8',
        rating: 5,
        dateAdded: new Date('2024-03-10'),
        isPhysicalCopy: true
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
        description: 'A story within a story about a house that defies physics.',
        notes: 'Complex structure mirrors the mind’s labyrinth.',
        location: 'shelf L1',
        rating: 5,
        dateAdded: new Date('2024-04-01'),
        isPhysicalCopy: true
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
        tags: ['metafiction', 'labyrinth', 'philosophy', 'short stories', 'Argentina'],
        description: 'Collection of stories exploring infinite, recursive, and conceptual mazes.',
        notes: 'Borges invented the mental labyrinth.',
        location: 'shelf L2',
        rating: 5,
        dateAdded: new Date('2024-04-05'),
        isPhysicalCopy: true
      },
      {
        id: '11',
        coverImage: 'assets/poetics_of_space.jpg',
        title: 'Poetics of Space',
        author: 'Gaston Bachelard',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '1958',
        language: 'English',
        originalLanguage: 'French',
        tags: ['architecture', 'philosophy', 'dreamlike', 'space', 'intimacy'],
        description: 'Philosophical meditation on how we inhabit and imagine spaces.',
        notes: 'Makes me see houses as more than just structures.',
        location: 'shelf L3',
        rating: 4,
        dateAdded: new Date('2024-04-10'),
        isPhysicalCopy: true
      },
      {
        id: '12',
        coverImage: 'assets/piranesi.jpg',
        title: 'Piranesi',
        author: 'Susanna Clarke',
        mediaType: this.MEDIA_TYPES.BOOK,
        creationDate: '2020',
        language: 'English',
        originalLanguage: 'English',
        tags: ['labyrinth', 'mindscape', 'isolation', 'dreamlike', 'fantasy'],
        description: 'A surreal exploration of a vast, impossible house and its solitary inhabitant.',
        notes: 'Claustrophobic yet beautiful.',
        location: 'shelf L4',
        rating: 5,
        dateAdded: new Date('2024-04-15'),
        isPhysicalCopy: true
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
        description: 'A medieval murder mystery set in an abbey full of hidden knowledge.',
        notes: 'The library itself feels like a character.',
        location: 'shelf L5',
        rating: 5,
        dateAdded: new Date('2024-04-20'),
        isPhysicalCopy: true
      },

      // --- MISC COLLECTION ---
      {
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
      }
    ]);
  }
}
