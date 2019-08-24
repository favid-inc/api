export interface CreateSubAccount {
  Request: Request;
  Response: Response;
}

interface Request {
  url: "/marketplace/create_account";
  method: "POST";
  data?: {
    name?: string;
    commissions?: {
      cents?: number;
      percent?: number;
      credit_card_cents?: number;
      credit_card_percent?: number;
      bank_slip_cents?: number;
      bank_slip_percent?: number;
    };
  };
}

interface Response {
  status: 200;
  data: {
    account_id: string;
    name: string;
    live_api_token: string;
    test_api_token: string;
    user_token: string;
  };
}
