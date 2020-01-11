import { Order } from "../model";
import { Action } from "./action";

export type ListOrders = Action<
  {
    url: "/ListOrders";
    method: "GET";
    params?: {
      orderStatus?: Order["status"] | Array<Order["status"]>;
    };
    data?: void;
  },
  Order[]
>;

export type DeclineOrder = Action<
  {
    url: "/DeclineOrder";
    method: "POST";
    params?: void;
    data: Order;
  },
  Order
>;

export type FulfillOrder = Action<
  {
    url: "/FulfillOrder";
    method: "POST";
    data: Order;
  },
  Order
>;
