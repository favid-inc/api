import { GetAccountInfo, RequestWithdraw } from "../iugu/account";
import { Action } from "./action";

export interface LoadWalletInfo extends Action {
  Request: {
    url: "/LoadWalletInfo";
    method: "GET";
    query?: void;
    data?: void;
  };
  Response: GetAccountInfo["Response"];
}

export interface RequestWithdraw extends Action {
  Request: {
    url: "/RequestWithdraw";
    method: "POST";
    query?: void;
    data: {
      amount: number;
    };
  };
  Response: void;
}
