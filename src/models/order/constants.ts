export const ORDER = "order";

export enum OrderFlow {
  PLACE = "order_flow_place",
  DECLINE = "order_flow_decline",
  ACCEPT = "order_flow_accept",
}

export enum OrderStatus {
  OPENED = "OP",
  DECLINED_BY_ARTIST = "DA",
  DONE = "DN",
}
