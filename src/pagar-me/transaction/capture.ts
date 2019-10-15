import { Action } from "../action";
import { Customer } from "../customer";
import { Billing } from "./billing";
import { Item } from "./item";
import { Shipping } from "./shipping";
import { SplitRule } from "./split-rule";
import { Transaction } from "./transaction";

export type CaptureTransaction = Action<Request, Transaction>;

interface Request {
  url: "/transactions/:id/capture";
  method: "POST";
  data: {
    amount: number;
    split_rules?: SplitRule[];
  };
}
