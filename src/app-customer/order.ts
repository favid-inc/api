import { Address, CreateTransaction, Customer, Transaction, TransactionPaymentMethod } from "../pagar-me";

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
      address: Address;
      customer: Customer;
      order: Order;
      paymentMethod: TransactionPaymentMethod;
    };
  };
  Response: CreateTransaction["Response"];
}

export interface ReadOrderTransaction extends Action {
  Request: {
    url: "/ReadOrderTransaction";
    method: "GET";
    params: {
      orderId: Order["id"];
    };
  };
  Response: Transaction;
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

export interface UnlikeOrder extends Action {
  Request: {
    url: "/UnlikeOrder";
    method: "POST";
    data: {
      orderId: SocialOrder["id"];
    };
  };
  Response: SocialOrder;
}
