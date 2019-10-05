// https://docs.pagar.me/reference#criando-um-recebedor

import { Action } from "../action";
import { BankAccount } from "../bank-account";
import { Recipient, RecipientTransferInterval, RegisterInformation } from "./recipient";

export type CreateRecipient = Action<Request, Recipient>;

interface Request {
  url: "/recipients";
  method: "POST";
  data: RequestData;
}

type RequestData = {
  transfer_enabled: boolean;
  postback_url?: string;
  anticipatable_volume_percentage?: string;
  automatic_anticipation_enabled?: string;
  automatic_anticipation_type?: "full" | "1025";
  automatic_anticipation_days?: string;
  automatic_anticipation_1025_delay?: string;
  register_information: RegisterInformation;
  metadata?: any;
} & (
  | {
      bank_account_id: string;
    }
  | {
      bank_account: BankAccount;
    }) &
  (RecipientTransferInterval);
