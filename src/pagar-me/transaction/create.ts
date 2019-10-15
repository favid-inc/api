import { Action } from "../action";
import { Customer } from "../customer";
import { Billing } from "./billing";
import { Item } from "./item";
import { Shipping } from "./shipping";
import { SplitRule } from "./split-rule";
import { Transaction } from "./transaction";

import { TransactionPaymentMethod } from "./payment-method";

export type CreateTransaction = Action<Request, Transaction>;

interface Request {
  url: "/transactions";
  method: "POST";
  data: RequestData;
}

type RequestData = {
  amount: number;
  soft_descriptor: string;
  capture: boolean;

  split_rules?: SplitRule[];

  billing: Billing;
  items: Item[];
  customer?: Customer;
  shipping?: Shipping;
  metadata?: any;
  session?: string;
  local_time?: string;
} & (
  | {
      async?: boolean;
    }
  | {
      postback_url: string;
      async?: true;
    }) &
  (TransactionPaymentMethod);
