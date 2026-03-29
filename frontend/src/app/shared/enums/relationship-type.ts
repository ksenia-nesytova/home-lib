// | Question                          | Relationship        |
// |----------------------------------|---------------------|
// | who gave it                      | GIFTED_BY           |
// | what influenced it               | INSPIRED_BY         |
// | how you discovered it            | DISCOVERED_THROUGH  |
// | who you experienced it with      | EXPERIENCED_WITH    |
// | where you experienced it         | EXPERIENCED_AT      |
// | where you acquired it            | ACQUIRED_AT         |
// | what other work feels similar    | SIMILAR_TO          |
// | what life memory it triggers     | REMINDS_OF          |
// | what larger universe it belongs to | PART_OF           |

export enum RelationshipType {
  GIFTED_BY = 'GIFTED_BY', //person, organization, event
  INSPIRED_BY = 'INSPIRED_BY', // media_entity. Implies direction
  // (i.e. "The Little Sleep" was inspired by "The Big Sleep")
  DISCOVERED_THROUGH = 'DISCOVERED_THROUGH',
  // person, location, Reddit, another media entity, etc.
  // Used when something led you to discover this work
  // (e.g. briefly mentioned in another book)

  EXPERIENCED_WITH = 'EXPERIENCED_WITH', // person/pet

  EXPERIENCED_AT = 'EXPERIENCED_AT', // location (e.g. "I watched this movie at the CINEMA cinema")
  ACQUIRED_AT = 'ACQUIRED_AT', // location / store / online platform

  SIMILAR_TO = 'SIMILAR_TO', // feels similar to some other media entity, but you may not know why
  // BIDIRECTIONAL
  // i.e. Star Wars is kinda similar to Star Trek, but they are not part of the same universe

  REMINDS_OF = 'REMINDS_OF', // location, person, memory, another media entity(NOT the Star Trek vs Star Wars case, rather a vague subjective similarity one feels)
  // Focus on LIFE context
  // (e.g. REMINDS_OF "that time I got wasted")

  PART_OF = 'PART_OF',
  // universe / anthology / franchise
  // NOT a numbered series
  // e.g. Witcher universe(games, books, etc), a short story collection (Brodsky's poem from Homage to Robert Frost), etc.
}

export const RELATIONSHIP_CONFIG: Record<RelationshipType, RelationshipConfig> =
  {
    [RelationshipType.GIFTED_BY]: {
      label: 'Gifted by',
      question: 'Was this a gift from someone?',
      placeholder: 'Anna, Mom...',
    },

    [RelationshipType.INSPIRED_BY]: {
      label: 'Inspired by',
      question: 'Was this inspired by something?',
      placeholder: 'The Odyssey, Francesca da Rimini...',
    },

    [RelationshipType.DISCOVERED_THROUGH]: {
      label: 'Discovered through',
      question: 'How did you discover this?',
      placeholder: 'Friend, Reddit, mentioned in another book...',
    },

    [RelationshipType.EXPERIENCED_WITH]: {
      label: 'Experienced with',
      question: 'Who did you experience this with?',
      placeholder: 'Anna, Mom...',
    },

    [RelationshipType.EXPERIENCED_AT]: {
      label: 'Experienced at',
      question: 'Where did you first experience this?',
      placeholder: 'Cinema "Great Cinema", Mom...',
    },

    [RelationshipType.ACQUIRED_AT]: {
      label: 'Acquired at',
      question: 'Where did you acquire this?',
      placeholder: 'Online Store, Mom...',
    },

    [RelationshipType.SIMILAR_TO]: {
      label: 'Similar to',
      question: 'What other works feel similar?',
    },

    [RelationshipType.REMINDS_OF]: {
      label: 'Reminds of',
      question: 'Does it remind you of something?',
      placeholder: 'My local park, this other books series...',
    },

    [RelationshipType.PART_OF]: {
      label: 'Part of',
      question: 'What larger universe does it belong to?',
      placeholder: 'The Witcher universe...',
    },
  };

export interface RelationshipConfig {
  label: string;
  question: string;
  placeholder?: string;
}
