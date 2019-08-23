import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestWithdraw {
  Request: Request;
  Response: Response;
}

type Request = AxiosRequestConfig & {
  url: "/accounts/:id/request_withdraw";
  method: "POST";
  data: {
    amount: number;
  };
};

type Response = AxiosResponse<void> & {
  status: 200;
  data: {
    id: string;
    amount: string;
  };
};
