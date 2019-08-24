export interface RequestWithdraw {
  Request: Request;
  Response: Response;
}

interface Request {
  url: "/accounts/:id/request_withdraw";
  method: "POST";
  auth: {
    password: "";
    username: string;
  };
  data: {
    amount: number;
  };
}

interface Response {
  status: 200;
  data: {
    id: string;
    amount: string;
  };
}
