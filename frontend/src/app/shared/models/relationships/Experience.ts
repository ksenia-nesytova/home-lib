export type ExperienceType = 'READ' | 'WATCHED' | 'PLAYED' | 'LISTENED';

export interface Experience {
  id: string;

  workId: string;
  instanceId?: string | null; // optional

  dateAdded: Date; //this experience was added to the app

  type: ExperienceType; //should probably distinguish between LISTENED and HEARD

  at?: string; // where you experienced it (cinema, home, train)
  with?: string[]; // who you experienced it with (Anna, friends, your cat)

  startedAt?: Date; // "I've played Skyrim for 3 months straight from May 2016..."
  finishedAt?: Date; //"...to August 1 2016"
}

// EXPERIENCED_WITH = 'EXPERIENCED_WITH', // person/pet

// EXPERIENCED_AT = 'EXPERIENCED_AT', // location (e.g. "I watched this movie at the CINEMA cinema")
