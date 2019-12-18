import { Address, CreateTransaction, Customer, Transaction, TransactionPaymentMethod } from "../pagar-me";

import { Order } from "../model";
import { Action } from "./action";

export type SocialOrder = Order & { like?: boolean; likes?: number };

export type ListOrders = Action<
  {
    url: "/ListOrders";
    method: "GET";
  },
  SocialOrder[]
>;

export type ReadOrder = Action<
  {
    url: "/ReadOrder";
    method: "GET";
    params: {
      orderId: Required<Order>["id"];
    };
  },
  SocialOrder
>;

export type PlaceOrder = Action<
  {
    url: "/PlaceOrder";
    method: "POST";
    data: Order;
  },
  Order
>;

export type PayOrder = Action<
  {
    url: "/PayOrder";
    method: "POST";
    data: {
      address: Address;
      customer: Customer;
      order: Order;
      paymentMethod: TransactionPaymentMethod;
    };
  },
  CreateTransaction["Response"]
>;

export type ReadOrderTransaction = Action<
  {
    url: "/ReadOrderTransaction";
    method: "GET";
    params: {
      orderId: Required<Order>["id"];
    };
  },
  Transaction
>;

export type LikeOrder = Action<
  {
    url: "/LikeOrder";
    method: "POST";
    data: {
      orderId: Required<SocialOrder>["id"];
    };
  },
  SocialOrder
>;

export type UnlikeOrder = Action<
  {
    url: "/UnlikeOrder";
    method: "POST";
    data: {
      orderId: Required<SocialOrder>["id"];
    };
  },
  SocialOrder
>;
