import { Recipient } from "../pagar-me";
import { ArtistCategory } from "./artist-category";
import { Model } from "./model";

export const ARTIST = "Artist";

export interface Artist extends Model {
  affiliationCode?: string;
  artistAffiliatedId?: string;
  artisticName?: string;
  biography?: string;
  categories?: ArtistCategory[];
  email?: string;
  location?: string;
  mainCategory?: ArtistCategory;
  name?: string;
  pagarMeRecipientId?: Recipient["id"];
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
