import { Action } from "../action";
import { Balance } from "../balance";

export type ReadRecipientBalance = Action<Request, Balance>;

interface Request {
  url: "recipients/:recipient_id/balance";
  method: "GET";
}
