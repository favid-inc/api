export interface PaymentToken {
  Request: Request;
  Response: Response;
}

interface Request {
  url: "/payment_token";
  method: "POST";
  data: {
    test: boolean;
    account_id: string;
    method: string;
    data: {
      first_name: string;
      last_name: string;
      month: string;
      number: string;
      verification_value: string;
      year: string;
    };
  };
}

type Response =
  | {
      status: 200;
      data: {
        id: string;
        method: "credit_card";
        extra_info: {
          bin: string;
          brand: string;
          display_number: string;
          holder_name: string;
          month: number;
          year: number;
        };
        test: boolean;
      };
    }
  | {
      status: 400;
      data: {
        errors: "account_id invalido";
      };
    }
  | {
      status: 422;
      data: {
        errors: {
          method: string[];
          number: string[];
          year: string[];
        };
      };
    };
