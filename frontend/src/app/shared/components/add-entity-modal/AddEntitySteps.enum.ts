import { RelationshipType } from '@app/shared/enums/relationship-type';

export enum AddEntitySteps {
  CORE_INFO, //title, author/creator, media type, creation date, language, original language
  ACQUISITION, //where/how did you acquire it, when did you acquire it. GIFTED_BY, ACQUIRED_AT
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

export const STEP_RELATIONSHIPS: Record<AddEntitySteps, RelationshipType[]> = {
  [AddEntitySteps.CORE_INFO]: [],

  [AddEntitySteps.ACQUISITION]: [
    RelationshipType.GIFTED_BY,
    RelationshipType.ACQUIRED_AT,
  ],

  [AddEntitySteps.DISCOVERY]: [RelationshipType.DISCOVERED_THROUGH],

  [AddEntitySteps.EXPERIENCE]: [
    RelationshipType.EXPERIENCED_WITH,
    RelationshipType.EXPERIENCED_AT,
  ],

  [AddEntitySteps.MEANING]: [
    RelationshipType.SIMILAR_TO,
    RelationshipType.REMINDS_OF,
  ],

  [AddEntitySteps.CONNECTIONS]: [
    RelationshipType.INSPIRED_BY,
    RelationshipType.PART_OF,
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
