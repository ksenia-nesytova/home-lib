import { MediaType } from "@app/shared/enums/media-type";

export interface CardFilters {
  search?: string | null;

  title?: string | null;
  author?: string | null;
  mediaType?: MediaType | null;
  language?: string | null;
  originalLanguage?: string | null;
  tags?: string[];

  rating?: number | null;
  dateAdded?: Date | null;
  isPhysicalCopy?: boolean | null;
}
