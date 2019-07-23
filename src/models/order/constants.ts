export const ORDER = "order";

export enum OrderFlow {
  CREATE = "order_flow_create",
  DECLINE = "order_flow_decline",
}

export enum OrderStatus {
  OPENED = "OP",
  DECLINED_BY_ARTIST = "DA",
  DONE = "DN",
}
