import { Model } from "./model";
import { Order } from "./order";

export const ORDER_LIKE = "OrderLike";

export interface OrderLike extends Model {
  customerEmail?: string;
  customerName?: string;
  customerUserUid?: string;
  date?: number;
  orderId?: Order["id"];
}
