import { OrderModel } from "./OrderModel";

export const ORDER = "order";

export enum OrderFlow {
  PLACE = "order_flow_place",
  DECLINE = "order_flow_decline",
  ACCEPT = "order_flow_accept",
}

export interface OrderFlowPlaceOrderArguments {
  artistId: string;
  isGift: boolean;
  theirName: string;
  videoInstructions: string;
}

export interface OrderFlowPlaceOrderResponse {
  order: OrderModel;
}

export interface OrderFlowDeclineOrderArguments {
  declinedByArtistDescription: string;
}

export interface OrderFlowDeclineOrderResponse {
  order: OrderModel;
}

export enum OrderStatus {
  OPENED = "OP",
  DECLINED_BY_ARTIST = "DA",
  DONE = "DN",
}
