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

export type LoadWalletInfo = Action<
  {
    url: "/LoadWalletInfo";
    method: "GET";
  },
  {
    balance: Balance;
    bankAccount: BankAccount;
  }
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
