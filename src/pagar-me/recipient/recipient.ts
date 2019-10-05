// https://docs.pagar.me/reference#objeto-recebedor-1

import { BankAccount } from "../bank-account";

export type Recipient = {
  object: "recipient";
  id: "string";
  bank_account: BankAccount;
  transfer_enable: boolean;
  last_transfer: string;
  automatic_anticipation_enabled: boolean;
  anticipatable_volume_percentage: number;
  automatic_anticipation_type: "full" | "1025";
  automatic_anticipation_days: string;
  automatic_anticipation_1025_delay: number;
  date_created: string;
  date_updated: string;
  postback_url: string;
  status: RecipientStatus;
  status_reason?: string;
  register_information: RegisterInformation;
  metadata?: any;
} & (RecipientTransferInterval);

export type RegisterInformation = {
  document_number: string;
  email: string;
  site_url?: string;
  phone_numbers: Array<{
    ddd: string;
    number: string;
    type: string;
  }>;
} & (
  | {
      type: "individual";
      name: string;
    }
  | {
      type: "corporation";
      company_name: string;
      managing_partners: Array<{
        type: string;
        document_number: string;
        email: string;
        name: string;
      }>;
    });

export enum RecipientStatus {
  REGISTRATION = "registration",
  AFFILIATION = "affiliation",
  ACTIVE = "active",
  REFUSED = "refused",
  SUSPENDED = "suspended",
  BLOCKED = "blocked",
  INACTIVE = "inactive",
}

export type RecipientTransferInterval =
  | {
      transfer_interval: "daily";
    }
  | {
      transfer_interval: "weekly";
      transfer_day: 1 | 2 | 3 | 4 | 5;
    }
  | {
      transfer_interval: "monthly";
      transfer_day:
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22
        | 23
        | 24
        | 25
        | 26
        | 27
        | 28
        | 29
        | 30
        | 31;
    };
