import { Model } from "../Model";

export interface OrderModel extends Model {
  customerId?: string;
  artistId?: string;
  status?: "OP" | "RA" | "DO";

  myName?: string;
  isGift?: boolean;
  theirName?: string;
  videoInstructions?: string;

  artistName?: string;
  price?: number;
  creationDate?: number;
  refusedByArtistDescription?: string;

  videoCreationDate?: number;
  video?: string;
}
