import { Relationship } from './Relationship';

export interface EntityInstanceModel {
  id: string; //own unique id
  workId: string; //instance of {id}

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
   * Personal perception layer
   */
  tags: string[];
  notes: string | null;
  rating?: number;

  /**
   * Experience
   */
  acquiredFrom?: string; //| EntityId(add later) // where you got it:  location / store / online platform
  acquiredFromEntityId?: string | null; //entity id

  relationships?: Relationship[];
}
