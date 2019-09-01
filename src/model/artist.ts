import { CreateSubAccount } from "../iugu";
import { ArtistCategory } from "./artist-category";
import { Model } from "./model";

export const ARTIST = "Artist";

export interface Artist extends Model {
  artisticName?: string;
  artisticAffiliatedId?: string;
  biography?: string;
  categories?: ArtistCategory[];
  email?: string;
  iuguSubAccountId?: string;
  iuguSubAccountMetadata?: CreateSubAccount["Response"]["data"];
  location?: string;
  mainCategory?: ArtistCategory;
  name?: string;
  phoneNumber?: string;
  photoUri?: string;
  price?: number;
  registerStatus?: ArtistRegisterStatus;
  status?: ArtistStatus;
  userUid?: string;
  videoUri?: string;
}

export enum ArtistStatus {
  ACTIVE = "A",
  INACTIVE = "I",
  BLOCKED = "B",
  OUTCAST = "O",
}

export enum ArtistRegisterStatus {
  APPROVED = "A",
  DENIED = "D",
  PENDING = "P",
}
