import { Customer } from "../customer";
import { Billing } from "./billing";
import { Item } from "./item";
import { Shipping } from "./shipping";
import { SplitRule } from "./split-rule";

import { TransactionPaymentMethod } from "./payment-method";

export type CreateTransaction = {
  amount: number;
  soft_descriptor: string;
  capture: boolean;

  split_rules: SplitRule[];

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
