import { Model } from "../Model";
import { OrderStatus } from "./constants";

export interface OrderModel extends Model {
  customerId?: string;
  artistId?: string;
  status?: OrderStatus;

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
