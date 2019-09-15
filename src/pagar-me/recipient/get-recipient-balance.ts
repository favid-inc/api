import { Action } from "../action";
import { Balance } from "../balance";

export type GetRecipientBalance = Action<Request, Balance>;

interface Request {
  url: "recipients/:recipient_id/balance";
  method: "GET";
}
