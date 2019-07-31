import { Model } from "../Model";
import { OrderStatus } from "./constants";

export interface OrderModel extends Model {
  artistId?: string;
  status?: OrderStatus;

  isGift?: boolean;
  theirName?: string;
  videoInstructions?: string;

  customerId?: string;
  customerName?: string;
  customerPhoto?: string;

  artistName?: string;
  artistPhoto?: string;

  price?: number;
  creationDate?: number;
  declinedByArtistDescription?: string;

  videoCreationDate?: number;
  video?: string;
  videoThumb?: string;
}
