export interface UpdateAccount {
  Request: Request;
  Response: Response;
}

interface Request {
  url: "/accounts/:id/request_verification";
  method: "POST";
  data: {
    data?: {
      address?: string;
      automatic_transfer?: string;
      business_type?: string;
      cep?: string;
      city?: string;
      cnpj?: string;
      company_name?: string;
      cpf?: string;
      name?: string;
      person_type?: string;
      physical_products?: string;
      price_range?: string;
      state?: string;
      telephone?: string;
    };
  };
}

interface Response {
  status: 200;
  data: {
    account_id: string;
    live_api_token: string;
    name: string;
    test_api_token: string;
    user_token: string;
  };
}
