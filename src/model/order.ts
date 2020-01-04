import { Model } from "../model";
import { Transaction, TransactionStatus as OrderPaymentStatus } from "../pagar-me";
import { Artist } from "./artist";

export const ORDER = "Order";

export const ORDER_UPLOAD_DIRECTORY = `${ORDER}/:artistUserUid/:orderId`;

export interface Order extends Model {
  artistArtisticName?: Artist["artisticName"];
  artistEmail?: Artist["email"];
  artistId?: Artist["id"];
  artistPhotoUri?: Artist["photoUri"];
  artistPrice?: Artist["price"];
  billingAmount?: number;
  customerEmail?: string;
  customerName?: string;
  customerUserUid?: string;
  dueDateFulfillment?: number;
  dueDatePayment?: number;
  instructions?: string;
  isGift?: boolean;
  pagarMeTransactionId?: Transaction["id"];
  paymentStatus?: OrderPaymentStatus;
  receiverName?: string;
  serviceTax?: number;
  status?: OrderStatus;
  statusCanceledDate?: number;
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

export { OrderPaymentStatus };
