import { Artist } from "./artist";
import { Model } from "./model";

export const ARTIST_FOLLOWER = "ArtistFollower";

export interface ArtistFollower extends Model {
  artistId?: Artist["id"];
  customerEmail?: string;
  customerName?: string;
  customerUserUid?: string;
  date?: number;
}
