import { Recipient, RecipientStatus } from "../pagar-me";
import { ArtistCategory } from "./artist-category";
import { Model } from "./model";

export const ARTIST = "Artist";

export const ARTIST_UPLOAD_DIRECTORY = `${ARTIST}/:userUid/temporary`;

export interface Artist extends Model {
  affiliatedArtistId?: Artist["id"];
  affiliatedDate?: number;
  affiliationCode?: string;
  artisticName?: string;
  biography?: string;
  birthdate?: number;
  categories?: ArtistCategory[];
  email?: string;
  featured?: boolean;
  location?: string;
  mainCategory?: ArtistCategory;
  name?: string;
  pagarMeRecipientId?: Recipient["id"];
  phoneNumber?: string;
  photoUri?: string;
  price?: number;
  recipientStatus?: ArtistRecipientStatus;
  registerStatus?: ArtistRegisterStatus;
  slug?: string;
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
  INCOMPLETE = "I",
  PENDING = "P",
}

export type ArtistRecipientStatus = RecipientStatus;
