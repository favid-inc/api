import { Model } from "../model";

export const ORDER = "order";

export interface OrderModel extends Model {
  artistId?: string;
  artistName?: string;
  artistPhoto?: string;

  customerId?: string;
  customerName?: string;
  customerPhoto?: string;

  status?: OrderStatus;
  statusPlacedDate?: number;
  statusDeclinedDate?: number;
  statusDeclinedDescription?: string;
  statusFulfilledDate?: number;

  paymentStatus: OrderPaymentStatus;

  instructions?: string;
  isGift?: boolean;
  price?: number;
  theirName?: string;

  video?: string;
  videoThumbnail?: string;
}

export enum OrderStatus {
  PLACED = "P",
  DECLINED = "D",
  FULFILLED = "F",
}

export enum OrderPaymentStatus {
  PENDING = "pending",
  PAID = "paid",
  CANCELED = "canceled",
  PARTIALLY_PAID = "partially_paid",
  REFUNDED = "refunded",
  EXPIRED = "expired",
  AUTHORIZED = "authorized",
  IN_PROTEST = "in_protest",
  CHARGEBACK = "chargeback",
}
