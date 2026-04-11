import { MediaType } from '../enums/media-type';
import { Relationship } from './Relationship';

export interface CardViewModel {
  id: string;

  //Work
  title: string;
  author: string | null;
  mediaType: MediaType;
  creationDate: string; // or Date
  originalLanguage: string | null;
  description?: string;

  //Instance
  language: string | null;
  tags: string[] | null;
  notes: string | null;
  rating: number | null; // Number
  coverImage: string | null;

  dateAdded: Date; // Date

  isPhysicalCopy: boolean;
  downloadUrl?: string | null; //for e-copies
  location: string | null;

  relationships?: Relationship[];
}
