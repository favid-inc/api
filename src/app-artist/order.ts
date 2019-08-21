import { Order, OrderStatus } from "../model";
import { Action } from "./action";

export interface ListOrders extends Action {
  Request: {
    url: "/ListOrders";
    method: "GET";
    query?: void;
    data?: void;
  };
  Response: Order[];
}

export interface DeclineOrder extends Action {
  Request: {
    url: "/DeclineOrder";
    method: "POST";
    query?: void;
    data: Order;
  };
  Response: Order;
}

export interface FulfillOrder extends Action {
  Request: {
    url: "/FulfillOrder";
    method: "POST";
    query?: void;
    data: FormData;
  };
  Response: Order;
}
