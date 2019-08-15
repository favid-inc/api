import { ArtistCategory } from "./artist-category";
import { Model } from "./model";

export const ARTIST = "Artist";

export interface Artist extends Model {
  artisticName?: string;
  biography?: string;
  categories?: ArtistCategory[];
  email?: string;
  location?: string;
  mainCategory?: ArtistCategory;
  name?: string;
  phone?: string;
  photoUri?: string;
  price?: number;
  status?: ArtistStatus;
  userUid?: string;
}

export enum ArtistStatus {
  ACTIVE = "A",
  INACTIVE = "I",
  BLOCKED = "B",
  OUTCAST = "O",
}
