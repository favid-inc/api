export type TransactionPaymentMethod =
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
    };
