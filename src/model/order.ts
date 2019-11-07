import { Model } from "../model";
import { Transaction, TransactionStatus as OrderPaymentStatus } from "../pagar-me";
import { Artist } from "./artist";

export const ORDER = "Order";

export const ORDER_UPLOAD_DIRECTORY = `${ORDER}/:artistUserUId/:orderId`;

export interface Order extends Model {
  artistArtisticName?: Artist["artisticName"];
  artistEmail?: Artist["email"];
  artistId?: Artist["id"];
  artistPhotoUri?: Artist["photoUri"];
  customerEmail?: string;
  customerName?: string;
  customerUserUid?: string;
  instructions?: string;
  isGift?: boolean;
  pagarMeTransactionId?: Transaction["id"];
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

export { OrderPaymentStatus };
