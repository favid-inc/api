import { Balance, BankAccount, CreateRecipient, Recipient } from "../pagar-me";
import { Action } from "./action";

export interface CreateWallet {
  Request: {
    url: "/CreateWallet";
    method: "POST";
    data: {
      registerInformation: CreateRecipient["Request"]["data"]["register_information"];
      bankAccount: BankAccount;
    };
  };
  Response: Recipient;
}

export type LoadWalletInfo = Action<
  {
    url: "/LoadWalletInfo";
    method: "GET";
  },
  {
    balance?: Balance;
    recipient?: Recipient;
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
