import { RelationshipType } from '../enums/relationship-type';

export interface Relationship {
  type: RelationshipType;
  target: string[];
}
