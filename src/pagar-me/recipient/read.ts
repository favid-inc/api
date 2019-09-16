import { Action } from "../action";
import { Recipient } from "./recipient";

export type ReadRecipient = Action<Request, Recipient>;

interface Request {
  url: "recipients/:recipient_id";
  method: "GET";
}
