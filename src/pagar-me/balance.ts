export interface Balance {
  object: "balance";
  waiting_funds: {
    amount: number;
  };
  available: {
    amount: number;
  };
  transferred: {
    amount: number;
  };
}
