import { Relationship } from './Relationship';

export interface EntityInstanceModel {
  id: string; //own unique id
  workId: string; //instance of {id}

  /**
   * Personal perception layer
   */
  tags: string[];
  notes: string | null;
  rating?: number;

  /**
   * Space/Physicality
   * Information about the specific instance
   */
  isPhysicalCopy: boolean;
  downloadUrl?: string | null; //for e-copies
  location?: string; //physical location: shelf, 'my boyfriend's place', etc
  language?: string | null;

  /**
   * UI
   */
  dateAdded: Date; // Date. This entry was created/
  coverImage?: string | null;

  /**
   * Experience
   */
  acquiredAt?: string; //location
  experiencedAt?: string; //location
  experiencedEnd?: string; //or Date. "I've played Skyrim for 3 months straight"

  relationships?: Relationship[];
}
