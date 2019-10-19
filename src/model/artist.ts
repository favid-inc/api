import { Recipient } from "../pagar-me";
import { ArtistCategory } from "./artist-category";
import { Model } from "./model";

export const ARTIST = "Artist";

export const ARTIST_UPLOAD_DIRECTORY = `${ARTIST}/:userUid/temporary`;

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
  pagarMeRecipientStatus?: Recipient["status"];
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
  INCOMPLETED = "I",
  PENDING = "P",
}
