import { Order } from "../model";
import { Action } from "./action";

export interface ListOrders extends Action {
  Request: {
    url: "/ListOrders";
    method: "GET";
    params?: void;
    data?: void;
  };
  Response: Order[];
}

export interface DeclineOrder extends Action {
  Request: {
    url: "/DeclineOrder";
    method: "POST";
    params?: void;
    data: Order;
  };
  Response: Order;
}

export interface FulfillOrder extends Action {
  Request: {
    url: "/FulfillOrder";
    method: "POST";
    params?: void;
    data: FormData;
  };
  Response: Order;
}
