import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface PaymentToken {
  Request: Request;
  Response: Response;
}

interface Request extends AxiosRequestConfig {
  url: "payment_token";
  method: "POST";
  data: {
    test: boolean;
    account_id: string;
    method: string;
    data: {
      number: string;
      verification_value: string;
      first_name: string;
      last_name: string;
      month: string;
      year: string;
    };
  };
}

type Response = AxiosResponse &
  (
    | {
        status: 200;
        data: {
          id: string;
          method: string;
          extra_info: {
            brand: string;
            holder_name: string;
            display_number: string;
            bin: string;
            month: number;
            year: number;
          };
          test: boolean;
        };
      }
    | {
        status: 400;
        data: {
          errors: "account_id invalido";
        };
      }
    | {
        status: 422;
        data: {
          errors: {
            method: string[];
            number: string[];
            year: string[];
          };
        };
      });
