import { Address } from "../address";
import { Customer } from "../customer";
import { Document } from "../document";
import { Billing } from "./billing";
import { Item } from "./item";
import { Shipping } from "./shipping";
import { SplitRule } from "./split-rule";

export type Transaction = {
  object: "transaction";
  status: TransactionStatus;
  refuse_reason?: TransactionRefuseReason;
  acquirer_name?: TransactionAcquirerName;
  acquirer_id?: string;
  acquirer_response_code?: string;
  authorization_code?: string;
  soft_descriptor?: string;
  tid?: number;
  nsu?: number;
  date_created?: string;
  date_updated?: string;
  amount?: number;
  authorized_amount?: number;
  paid_amount?: number;
  refunded_amount?: number;
  installments?: number;
  id?: number;
  cost?: number;
  postback_url?: string;
  capture_method?: "magstripe" | "emv" | "ecommerce";
  antifraud_score?: string;
  referer?: string;
  ip: string;
  subscription_id?: string;
  customer?: Customer;
  billing?: Billing;
  shipping?: Shipping;
  items?: Item[];
  address?: Address;
  documents?: Document[];
  metadata: any;
  split_rules?: SplitRule[];
  antifraud_metadata: any;
  session: string;
} & (
  | {
      payment_method: "credit_card";
      card_holder_name: string;
      card_last_digits: string;
      card_first_digits: string;
      card_brand: string;
      card_pin_mode: string;
    }
  | {
      payment_method: "boleto";
      boleto_url: string;
      boleto_barcode: string;
      boleto_expiration_date: string;
    });

export type TransactionStatus =
  | "processing"
  | "authorized"
  | "paid"
  | "refounded"
  | "waiting_payment"
  | "pending_refund"
  | "refused";

export type TransactionRefuseReason = "acquirer" | "antifraud" | "internal_error" | "no_acquirer" | "acquirer_timeout";

export type TransactionAcquirerName = "development" | "pagarme" | "stone" | "cielo" | "rede";
