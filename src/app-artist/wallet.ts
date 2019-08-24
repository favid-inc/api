import { GetAccountInfo, RequestWithdraw } from "../iugu";
import { Action } from "./action";

export interface LoadWalletInfo extends Action {
  Request: {
    url: "/LoadWalletInfo";
    method: "GET";
    params?: void;
    data?: void;
  };
  Response: GetAccountInfo["Response"]["data"];
}

export interface RequestWithdraw extends Action {
  Request: {
    url: "/RequestWithdraw";
    method: "POST";
    params?: void;
    data: {
      amount: number;
    };
  };
  Response: GetAccountInfo["Response"]["data"];
}
