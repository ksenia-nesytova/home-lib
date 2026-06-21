// | Question                          | Relationship        |
// |----------------------------------|---------------------|
// | who gave it                      | GIFTED_BY           |
// | what influenced it               | INSPIRED_BY         |
// | how you discovered it            | DISCOVERED_THROUGH  |
// | where you acquired it            | ACQUIRED_FROM         |
// | what other work feels similar    | SIMILAR_TO          |
// | what life memory it triggers     | REMINDS_OF          |
// | what larger universe it belongs to | PART_OF           |
// | does it mention/reference something else | REFERENCES           |

// If it has time → it is NOT a relationship
// If it is timeless meaning → it is a relationship

// If it answers:

// “what happened?”

// → it is NOT a relationship

// If it answers:

// “why does this matter?”

// → it IS a relationship

export enum RelationshipType {
  GIFTED_BY = 'GIFTED_BY', //person, organization, event
  INSPIRED_BY = 'INSPIRED_BY', // media_entity. Implies direction
  // (i.e. "The Little Sleep" was inspired by "The Big Sleep")
  DISCOVERED_THROUGH = 'DISCOVERED_THROUGH',
  // person, location, Reddit, event, another media entity, etc.
  // Used when something led you to discover this work
  // (e.g. briefly mentioned in another book)

  ACQUIRED_FROM = 'ACQUIRED_FROM', // location / store / online platform

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

  REFERENCES = 'REFERENCES',
  // direct (textual) reference
  // e.g one book references something. The Name of the Rose references Borges.
}

export enum RelationshipCluster {
  PERCEPTUAL = 'PERCEPTUAL', // MY MIND
  // subjective but not autobiographical. How I perceive connections?

  PROVENANCE = 'PROVENANCE', // MY LIFE
  // factual but personal experience.  What happened to me?

  STRUCTURAL = 'STRUCTURAL', // WORLD
  // non-personal, documented, external
}

export const RelationshipClusterByType: Record<
  RelationshipCluster,
  RelationshipType[]
> = {
  // --- PERSONAL PERCEPTION ---
  [RelationshipCluster.PERCEPTUAL]: [
    RelationshipType.REMINDS_OF,
    RelationshipType.SIMILAR_TO,
  ],

  [RelationshipCluster.PROVENANCE]: [
    RelationshipType.GIFTED_BY,
    RelationshipType.ACQUIRED_FROM,
  ],

  // --- NON-PERSONAL, FACTUAL ---
  [RelationshipCluster.STRUCTURAL]: [
    RelationshipType.INSPIRED_BY,
    RelationshipType.PART_OF,
    RelationshipType.REFERENCES,
  ],
};

export interface RelationshipConfig {
  label: string;
  question: string;
  placeholder?: string;
  cluster: RelationshipCluster;
}

// | who you experienced it with      | EXPERIENCED_WITH    |
// | where you experienced it         | EXPERIENCED_AT      |
