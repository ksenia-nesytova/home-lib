export interface CardFilters {
  search?: string | null;

  title?: string | null;
  author?: string | null;
  mediaType: string | null;
  language?: string | null;
  originalLanguage?: string | null;
  tags: string[] | null;
  rating?: number | null;
  dateAdded?: Date | null;
  isPhysicalCopy?: boolean | null;
}
