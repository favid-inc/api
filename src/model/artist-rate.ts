import { Artist } from "./artist";
import { Model } from "./model";

export const ARTIST_RATE = "ArtistRate";

export interface ArtistRate extends Model {
  artistId?: Artist["id"];
  censored?: boolean;
  censoredDate?: number;
  customerEmail?: string;
  customerName?: string;
  customerUserUid?: string;
  date?: number;
  message?: string;
  value?: 0 | 1 | 2 | 3 | 4 | 5;
}
