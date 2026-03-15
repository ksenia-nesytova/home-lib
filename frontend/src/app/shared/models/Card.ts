import { MediaType } from '../enums/media-type';
import { Relationship } from './Relationship';

export interface Card {
  id: string;
  coverImage: string | null;
  title: string;
  author: string | null;
  mediaType: MediaType;
  creationDate: string; // or Date
  language: string | null;
  originalLanguage: string | null;
  tags: string[] | null;
  description?: string;
  notes: string | null;
  location: string | null;
  rating: number | null; // Number
  dateAdded: Date; // Date
  isPhysicalCopy: boolean;
  downloadUrl?: string | null; //??
  relationships?: Relationship[];
}
