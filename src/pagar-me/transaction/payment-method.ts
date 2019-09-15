export interface TransactionPaymentMethod {
  boleto_expiration_date?: string;
  boleto_instructions?: string;
  card_cvv: string;
  card_expiration_date: string;
  card_hash: string;
  card_holder_name: string;
  card_id: string;
  card_number: string;
  installments?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  payment_method: "boleto" | "credit_card";
}
