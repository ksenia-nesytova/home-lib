import { MediaType } from '../enums/media-type';

/**
 * The Work itself
 */
export interface EntityModel {
  id: string;

  title: string;
  author: string | null;
  mediaType: MediaType;

  creationDate?: string | null; // or Date
  originalLanguage: string | null;

  description?: string | null;
}
