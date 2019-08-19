import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface CreateSubAccount {
  Request: Request;
  Response: Response;
}

type Request = AxiosRequestConfig & {
  url: "charge";
  method: "POST";
  data: {
    name: string;
    commissions: {
      cents: number;
      percent: string;
      credit_card_cents: number;
      credit_card_percent: string;
      bank_slip_cents: number;
      bank_slip_percent: string;
    };
  };
};

type Response = AxiosResponse & {
  status: 200;
  data: {
    account_id: string;
    name: string;
    live_api_token: string;
    test_api_token: string;
    user_token: string;
  };
};
