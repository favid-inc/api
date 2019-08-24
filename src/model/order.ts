import { DirectCharge, InvoiceStatusChanged } from "../iugu";
import { Model } from "../model";

export const ORDER = "Order";

export interface Order extends Model {
  artistArtisticName?: string;
  artistId?: number;
  artistPhotoUri?: string;
  customerName?: string;
  customerUserUid?: string;
  instructions?: string;
  isGift?: boolean;
  iuguInvoiceId?: string;
  iuguInvoiceMetadata?: DirectCharge["Response"]["data"];
  iuguInvoiceStatusChangedDate?: number;
  iuguInvoiceStatusChangedMetadata?: InvoiceStatusChanged["Request"]["body"];
  paymentStatus?: OrderPaymentStatus;
  price?: number;
  receiverName?: string;
  status?: OrderStatus;
  statusDeclinedDate?: number;
  statusDeclinedDescription?: string;
  statusFulfilledDate?: number;
  statusPlacedDate?: number;
  videoThumbnailUri?: string;
  videoUri?: string;
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

export interface OrderLike extends Model {
  customerEmail?: string;
  customerName?: string;
  customerUserUid?: string;
  date?: number;
  orderId?: number;
}
