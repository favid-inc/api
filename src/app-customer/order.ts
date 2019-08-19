import { DirectCharge, PaymentToken } from "../iugu";

import { Order } from "../model";
import { Action } from "./action";

export interface ListOrders extends Action {
  Request: {
    url: "/ListOrders";
    method: "GET";
  };
  Response: Order[];
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
