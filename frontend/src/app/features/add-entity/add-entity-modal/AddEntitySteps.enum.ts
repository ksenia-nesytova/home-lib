import { RelationshipType } from '@app/shared/enums/relationship-type';

export enum AddEntitySteps {
  CORE_INFO, //title, author/creator, media type, creation date, language, original language
  ACQUISITION, //where/how did you acquire it, when did you acquire it. GIFTED_BY, ACQUIRED_FROM
  DISCOVERY, //how did you discover it (DISCOVERED_THROUGH)
  EXPERIENCE, //your experience with it (EXPERIENCED_AT, EXPERIENCED_WITH)
  MEANING, //what does it mean to you (SIMILAR_TO, REMINDS_OF)
  CONNECTIONS, //how it connects to other things (INSPIRED_BY, PART_OF)
  TAGS, //custom tags like "detective", "noir", "USA", "Philip Marlowe", "urban decay"
  NOTES, //freeform notes about it
}

export const STEP_ORDER: AddEntitySteps[] = [
  AddEntitySteps.CORE_INFO,
  AddEntitySteps.ACQUISITION,
  AddEntitySteps.DISCOVERY,
  AddEntitySteps.EXPERIENCE,
  AddEntitySteps.MEANING,
  AddEntitySteps.CONNECTIONS,
  AddEntitySteps.TAGS,
  AddEntitySteps.NOTES,
];

export const STEP_CONFIG: Record<AddEntitySteps, StepConfig> = {
  [AddEntitySteps.CORE_INFO]: { title: 'Core Info' },
  [AddEntitySteps.ACQUISITION]: { title: 'Acquisition' },
  [AddEntitySteps.DISCOVERY]: { title: 'Discovery' },
  [AddEntitySteps.EXPERIENCE]: { title: 'Experience' },
  [AddEntitySteps.MEANING]: { title: 'Meaning' },
  [AddEntitySteps.CONNECTIONS]: { title: 'Connections' },
  [AddEntitySteps.TAGS]: { title: 'Tags' },
  [AddEntitySteps.NOTES]: { title: 'Notes' },
};

export const STEP_QUESTIONS: Partial<Record<AddEntitySteps, QuestionConfig[]>> =
  {
    [AddEntitySteps.CORE_INFO]: [],

    [AddEntitySteps.ACQUISITION]: [
      {
        type: 'RELATIONSHIP',
        relationshipType: RelationshipType.GIFTED_BY,
        label: 'Gifted by',
        question: 'Was this a gift from someone?',
        placeholder: 'Anna, Mom...',
      },
      {
        type: 'RELATIONSHIP',
        relationshipType: RelationshipType.ACQUIRED_FROM,
        label: 'Acquired from',
        question: 'Where did you get it?',
        placeholder: 'Online Store, Sister...',
      },
    ],
    [AddEntitySteps.DISCOVERY]: [
      {
        type: 'RELATIONSHIP',
        relationshipType: RelationshipType.DISCOVERED_THROUGH,
        label: 'Discovered through',
        question: 'How did you discover this?',
        placeholder: 'Friend, Reddit, mentioned in another book...',
      },
    ],

    [AddEntitySteps.EXPERIENCE]: [
      {
        type: 'EXPERIENCE',
        label: 'Experienced with',
        experienceField: 'with',
        question: 'Who did you experience this with?',
        placeholder: 'Anna, friends...',
      },
      {
        type: 'EXPERIENCE',
        label: 'Experienced at',
        experienceField: 'at',
        question: 'Where did you first experience it?',
        placeholder: 'Cinema, home, train...',
      },
      {
        type: 'EXPERIENCE',
        experienceField: 'startedAt',
        label: 'Started at',
        question: 'When did it start?',
        placeholder: 'May 2016...',
      },
      {
        type: 'EXPERIENCE',
        experienceField: 'finishedAt',
        label: 'Finished at',
        question: 'When did it end?',
        placeholder: 'August 2016...',
      },
    ],

    [AddEntitySteps.MEANING]: [
      {
        type: 'RELATIONSHIP',
        relationshipType: RelationshipType.SIMILAR_TO,
        label: 'Similar to',
        question: 'What other works feel similar?',
      },
      {
        type: 'RELATIONSHIP',
        relationshipType: RelationshipType.REMINDS_OF,
        label: 'Reminds of',
        question: 'Does it remind you of something?',
        placeholder: 'A memory, place, person...',
      },
    ],

    [AddEntitySteps.CONNECTIONS]: [
      {
        type: 'RELATIONSHIP',
        relationshipType: RelationshipType.INSPIRED_BY,
        label: 'Inspired by',
        question: 'Was this inspired by something?',
        placeholder: 'The Odyssey, Francesca da Rimini...',
      },
      {
        type: 'RELATIONSHIP',
        relationshipType: RelationshipType.PART_OF,
        label: 'Part of',
        question: 'What larger universe does it belong to?',
        placeholder: 'The Witcher universe...',
      },
    ],

    [AddEntitySteps.TAGS]: [],
    [AddEntitySteps.NOTES]: [],
  };

export const STEP_LABELS: Record<AddEntitySteps, string> = {
  [AddEntitySteps.CORE_INFO]: 'Core Info',
  [AddEntitySteps.ACQUISITION]: 'Acquisition',
  [AddEntitySteps.DISCOVERY]: 'Discovery',
  [AddEntitySteps.EXPERIENCE]: 'Experience',
  [AddEntitySteps.MEANING]: 'Meaning',
  [AddEntitySteps.CONNECTIONS]: 'Connections',
  [AddEntitySteps.TAGS]: 'Tags',
  [AddEntitySteps.NOTES]: 'Notes',
};

export interface QuestionConfig {
  type: QuestionType;

  // RELATIONSHIP mapping
  relationshipType?: RelationshipType;

  // EXPERIENCE mapping
  experienceField?: 'at' | 'with' | 'startedAt' | 'finishedAt';

  // VALUE mapping
  field?: string;

  label: string;
  question: string;
  placeholder?: string;
}

export type QuestionType = 'RELATIONSHIP' | 'EXPERIENCE';
