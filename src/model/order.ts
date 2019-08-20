import { Model } from "../model";

export const ORDER = "Order";

export interface Order extends Model {
  artistId?: number;
  artistArtisticName?: string;
  artistPhotoUri?: string;

  customerUserUid?: string;
  customerName?: string;
  // customerPhoto?: string;

  status?: OrderStatus;
  statusPlacedDate?: number;
  statusDeclinedDate?: number;
  statusDeclinedDescription?: string;
  statusFulfilledDate?: number;

  paymentStatus?: OrderPaymentStatus;

  instructions?: string;
  isGift?: boolean;
  price?: number;
  receiverName?: string;

  videoUri?: string;
  videoThumbnailUri?: string;
}

export enum OrderStatus {
  CANCELED = "C",
  DECLINED = "D",
  FULFILLED = "F",
  PLACED = "P",
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
