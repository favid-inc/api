import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface DirectCharge {
  Request: Request;
  Response: Response;
}

interface Request extends AxiosRequestConfig {
  url: "charge";
  method: "POST";
  data: {
    restrict_payment_method: boolean;
    customer_id: string;
    discount_cents: number;
    email: string;
    invoice_id: string;
    items: Item[];
    keep_dunning: boolean;
    months: number;
    order_id: string;
    payer: Payer;
  } & (
    | {
        bank_slip_extra_days: number;
        method: "bank_slip";
      }
    | {
        token: string;
      }
    | {
        customer_payment_method_id: string;
      });
}

interface Payer {
  address: Address;
  cpf_cnpj: string;
  email: string;
  name: string;
  phone_prefix: string;
  phone: string;
}

interface Address {
  city: string;
  complement?: string;
  district: string;
  number: string;
  state: string;
  street: string;
  zip_code: string;
}

interface Item {
  description: string;
  price_cents: number;
  quantity: number;
}

type Response = AxiosResponse &
  (
    | {
        status: 200;
        data: {
          error: {};
          identification: string;
          invoice_id: string;
          pdf: string;
          success: true;
          url: string;
        };
      }
    | {
        status: 200;
        data: {
          error: {};
          identification?: any;
          invoice_id: string;
          LR: string;
          message: string;
          pdf: string;
          success: true;
          url: string;
        };
      }
    | {
        status: 400;
        data: {
          errors: string;
        };
      }
    | {
        status: 422;
        data: {
          errors: {
            total: string[];
          };
        };
      }
    | {
        status: 422;
        data: {
          errors: {
            "payer.cpf_cnpj": string[];
            "payer.name": string[];
            "payer.address.zip_code": string[];
            "payer.address.number": string[];
          };
        };
      });
