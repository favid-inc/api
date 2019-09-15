import { Action } from "../action";
import { Recipient } from "./recipient";

export type GetRecipient = Action<Request, Recipient>;

interface Request {
  url: "recipients/:recipient_id";
  method: "GET";
}
