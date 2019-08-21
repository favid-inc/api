import { OrderPaymentStatus } from "../../model";

export interface InvoiceStatusChanged {
  Request: Request;
}

interface Request {
  url: "/InvoiceStatusChanged";
  method: "POST";
  body: {
    event: "invoice.status_changed";
    data: {
      id: string;
      account_id: string;
      status: OrderPaymentStatus;
      subscription_id?: string;
    };
  };
}
