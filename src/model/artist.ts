import { ArtistCategory } from "./artist-category";
import { Model } from "./model";
import User from "./User";

export const ARTIST = "Artist";

export interface Artist extends Model, User {
  artisticName?: string;
  biography?: string;
  categories?: ArtistCategory[];
  email?: string;
  location?: string;
  mainCategory?: ArtistCategory;
  name?: string;
  phone?: string;
  photo?: string;
  price?: number;
  status?: ArtistStatus;
}

export enum ArtistStatus {
  ACTIVE = "A",
  INACTIVE = "I",
  BLOCKED = "B",
  OUTCAST = "O",
}
