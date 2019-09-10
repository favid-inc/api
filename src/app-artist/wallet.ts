import { Balance, BankAccount, Recipient } from "../pagar-me";
import { Action } from "./action";

export interface CreateRecipient {
  Request: {
    url: "/CreateRecipient";
    method: "POST";
    data?: BankAccount;
  };
  Response: Recipient;
}

export type GetBalance = Action<
  {
    url: "/GetBalance";
    method: "GET";
  },
  Balance
>;

export type RequestWithdraw = Action<
  {
    url: "/RequestWithdraw";
    method: "POST";
    data: {
      amount: number;
    };
  },
  Balance
>;
