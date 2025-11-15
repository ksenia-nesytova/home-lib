import { MediaType } from '../enums/media-type';

export interface Card {
    id: string;
    coverImage?: string;
    title: string;
    author?: string;
    mediaType: MediaType;
    creationDate?: string; // or Date
    language?: string;
    originalLanguage?: string;
    tags: string[];
    description?: string;
    notes?: string;
    location?: string;
    rating?: number; // Number
    dateAdded?: Date; // Date
    isPhysicalCopy?: boolean;
    downloadUrl?: string;
}
