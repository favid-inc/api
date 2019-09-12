import { DirectCharge, PaymentToken } from "../pagar-me";

import { Order } from "../model";
import { Action } from "./action";

export type SocialOrder = Order & { like?: boolean; likes?: number };

export interface ListOrders extends Action {
  Request: {
    url: "/ListOrders";
    method: "GET";
  };
  Response: SocialOrder[];
}

export interface PlaceOrder extends Action {
  Request: {
    url: "/PlaceOrder";
    method: "POST";
    data: Order;
  };
  Response: Order;
}

export interface PayOrder extends Action {
  Request: {
    url: "/PayOrder";
    method: "POST";
    data: {
      order: Order;
      paymentToken: PaymentToken["Request"]["data"];
      directCharge: DirectCharge["Request"]["data"];
    };
  };
  Response: DirectCharge["Response"]["data"];
}

export interface LikeOrder extends Action {
  Request: {
    url: "/LikeOrder";
    method: "POST";
    data: {
      orderId: SocialOrder["id"];
    };
  };
  Response: SocialOrder;
}

export interface UnLikeOrder extends Action {
  Request: {
    url: "/UnLikeOrder";
    method: "POST";
    data: {
      orderId: SocialOrder["id"];
    };
  };
  Response: SocialOrder;
}
