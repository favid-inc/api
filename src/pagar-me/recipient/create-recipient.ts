// https://docs.pagar.me/reference#criando-um-recebedor

import { Action } from "../action";
import { BankAccount } from "../bank-account";
import { Recipient, RecipientTransferInterval } from "./recipient";

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

type RegisterInformation =
  | {
      type: "individual";
      document_number: string;
      name: string;
      site_url: string;
      email: string;
      phone_numbers: Array<{
        ddd: string;
        number: string;
        type: string;
      }>;
    }
  | {
      type: "corporation";
      document_number: string;
      company_name: string;
      email: string;
      site_url: string;
      phone_numbers: Array<{
        ddd: string;
        number: string;
        type: string;
      }>;
      managing_partners: Array<{
        type: string;
        document_number: string;
        email: string;
        name: string;
      }>;
    };
