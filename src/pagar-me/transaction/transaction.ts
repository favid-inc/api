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
  capture_method?: TransactionCaptureType;
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

export enum TransactionStatus {
  AUTHORIZED = "authorized",
  PAID = "paid",
  PENDING_REFUND = "pending_refund",
  PROCESSING = "processing",
  REFOUNDED = "refounded",
  REFUSED = "refused",
  WAITING_PAYMENT = "waiting_payment",
}

export enum TransactionRefuseReason {
  ACQUIRER = "acquirer",
  ACQUIRER_TIMEOUT = "acquirer_timeout",
  ANTIFRAUD = "antifraud",
  INTERNAL_ERROR = "internal_error",
  NO_ACQUIRER = "no_acquirer",
}

export enum TransactionAcquirerName {
  DEVELOPMENT = "development",
  PAGARME = "pagarme",
  STONE = "stone",
  CIELO = "cielo",
  REDE = "rede",
}

export enum TransactionCaptureType {
  MAGSTRIPE = "magstripe",
  EMV = "emv",
  ECOMMERCE = "ecommerce",
}
