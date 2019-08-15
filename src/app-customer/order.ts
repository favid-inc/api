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
