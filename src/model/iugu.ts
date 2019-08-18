declare namespace Iugu {
  export interface PaymentToken {
    account_id?: string;
    method?: string;
    test?: string;
    data?: PaymentData;
  }

  export interface DirectCharge {
    method?: string;
    token?: string;
    customer_payment_method_id?: string;
    restrict_payment_method?: string;
    customer_id?: string;
    invoice_id?: string;
    email?: string;
    months?: string;
    discount_cents?: string;
    bank_slip_extra_days: number;
    keep_dunning: boolean;
    items: Item[];
    payer: Payer;
    order_id: string;
  }

  export interface PaymentData {
    number?: string;
    verification_value?: string;
    first_name?: string;
    last_name?: string;
    month?: string;
    year?: string;
  }
  export interface Payer {
    cpf_cnpj: string;
    name: string;
    phone_prefix: string;
    phone: string;
    email: string;
    address: Address;
  }

  export interface Item {
    description: string;
    quantity: number;
    price_cents: number;
  }
  export interface Address {
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    zip_code: string;
    complement?: string;
  }
}
