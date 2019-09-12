export type CreateTransaction = {
  amount: number;
  soft_descriptor: string;
  capture: boolean;

  split_rules: TransactionSplitRule;

  billing: TransactionBilling;
  items: TransactionItem[];
  customer?: TransactionCustomer;
  shipping?: TransactionShipping;
  metadata?: any;
  session?: string;
  local_time?: string;
} & (
  | {
      payment_method: "boleto";
      installments?: 1;
      boleto_expiration_date?: string;
      boleto_instructions?: string;
    }
  | {
      payment_method: "credit_card";
      card_holder_name: string;
      card_number: string;
      card_expiration_date: string;
      card_cvv: string;
      installments: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    }
  | {
      payment_method: "credit_card";
      card_hash: string;
    }
  | {
      payment_method: "credit_card";
      card_id: string;
    }) &
  (
    | {
        async?: boolean;
      }
    | {
        postback_url: string;
        async?: true;
      });

export type Transaction = {
  object: "transaction";
  status: TransactionStatus;
  refuse_reason?: TransactionRefuseReason;
  acquirer_name?: TransactionAcquirerName;
  acquirer_id?: string;
  acquirer_response_code?: string;
  authorization_code?: string;
  soft_descriptor?: string;
  tid?: string;
  nsu?: string;
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
  customer?: TransactionCustomer;
  billing?: TransactionBilling;
  shipping?: TransactionShipping;
  items?: TransactionItem[];
  address?: TransactionAddress;
  documents?: TransactionDocument[];
  metadata: any;
  split_rules: TransactionSplitRule[];
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

export type TransactionSplitRule = {
  recipient_id: string;
  charge_processing_fee: boolean;
  liable: boolean;
  charge_remainder: boolean;
} & (
  | {
      amount: number;
    }
  | {
      percentage: number;
    });

interface TransactionBilling {
  name: string;
  address: TransactionAddress;
}

export interface TransactionShipping {
  name: string;
  fee: number;
  address: TransactionAddress;
  delivery_date?: string;
  expedited?: boolean;
}

export interface TransactionCustomer {
  external_id: string;
  name: string;
  type: "individual" | "corporation";
  country: "br";
  email: string;
  documents: TransactionDocument[];
  phone_numbers: string[];
  birthday?: string;
}

export type TransactionItem = {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
  tangible: boolean;
  category?: string;
} & (
  | {}
  | {
      date: string;
      venue: string;
    });

export interface TransactionAddress {
  zipcode: string;
  country: string;
  state: string;
  city: string;
  neighborhood?: string;
  street: string;
  street_number: string;
  complementary?: string;
}

export interface TransactionDocument {
  type: "individual" | "corporation";
  number: string;
}
