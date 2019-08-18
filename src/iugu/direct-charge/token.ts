export interface PaymentToken {
  Request: Request;
  Response: Response;
}

interface Request {
  url: "payment_token";
  method: "POST";
  data: {
    test: boolean;
    account_id: string;
    method: string;
    data: Data;
  };
}

interface Data {
  number: string;
  verification_value: string;
  first_name: string;
  last_name: string;
  month: string;
  year: string;
}
